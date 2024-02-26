import { NewClientProps } from '@/utils/resend/sendEmail'
import {
  Tailwind,
  Html,
  Head,
  Body,
  Container,
  Hr,
  Font,
  Text,
  Heading,
} from '@react-email/components'

export default function NewClientEmail({
  user,
  email,
  label,
  objective,
  phone,
}: NewClientProps) {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              black: '#1E1E1E',
              'light-black': '#262626',
              'dark-gray': '#5A5A5A',
              gray: '#9C9C9C',
              'light-gray': '#E7E7E7',
              white: '#F5F5F5',

              yellow: '#FAE423',
            },
          },
        },
      }}
    >
      <Html>
        <Head>
          <Font
            fontFamily="Inter"
            fallbackFontFamily="Verdana"
            webFont={{
              url: 'https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2',
              format: 'woff2',
            }}
            fontStyle="normal"
          />
        </Head>
        <Body>
          <Container key="container" className="max-w-[600px] w-full px-4">
            <Container
              key="content"
              className="w-full flex flex-col items-center justify-start"
            >
              <Heading className="text-2xl text-center text-black">
                Novo acesso na CMA Digital Music Landing Page
              </Heading>

              <Hr className="mt-5" />

              <Text className="text-sm">
                Um novo usuário acessou CMA Digital Music e deseja se tornar um
                novo cliente.
              </Text>

              <Text className="text-sm">
                Segue abaixo seus dados do formulário:
              </Text>

              <Container
                key="user-content"
                className="flex flex-col items-start justify-start mt-0"
              >
                <Text key={user}>Usuário: {user}</Text>
                <Text key={label}>Selo/ nome artístico: {label}</Text>
                <Text key={email}>E-mail: {email}</Text>
                <Text key={phone}>Telefone: {phone}</Text>
                <Text key={objective}>Objetivo como artista: {objective}</Text>
              </Container>
            </Container>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  )
}
