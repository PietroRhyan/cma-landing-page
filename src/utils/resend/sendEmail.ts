'use server'

import { Resend } from 'resend'
import NewClientEmail from '../../../emails/email-template'

export interface NewClientProps {
  user: string
  email: string
  label: string
  phone: string
  objective: string
}

export async function sendMail({
  user,
  label,
  email,
  phone,
  objective,
}: NewClientProps) {
  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const { data, error } = await resend.emails.send({
      from: 'CMA Digital Music <contato@cmadigitalmusic.com.br>',
      to: 'contato@cmadigitalmusic.com.br',
      subject: 'NOVO CLIENTE!',
      react: NewClientEmail({ user, label, email, phone, objective }),
    })

    if (error) {
      console.log(error)
      return { status: 'error' }
    }

    return { status: 'success', emailId: data?.id }
  } catch (error) {
    console.log(error)
    return { status: 'error' }
  }
}
