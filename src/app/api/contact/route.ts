import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { incrementContactCount } from '@/lib/queries'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 },
      )
    }

    const data = await resend.emails.send({
      from: 'Portfolio Contact <noreply@youngryou.com>',
      to: 'contact@youngryou.com',
      subject: `New Message from ${name} (Portfolio Contact)`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      replyTo: email,
    })

    await incrementContactCount()

    return NextResponse.json({ success: true, data }, { status: 200 })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
