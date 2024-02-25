import { CTAButton } from '@/components/CTAButton'
import Image from 'next/image'
import Link from 'next/link'

import { IoArrowUpCircleOutline, IoEyeOutline } from 'react-icons/io5'
import { LuDollarSign, LuBarChart3, LuContact2, LuMusic4 } from 'react-icons/lu'
import { BiSupport } from 'react-icons/bi'

// eslint-disable-next-line import/no-absolute-path
import singer from '/public/images/singer-unsplash.jpg'
import { AdvantageContent } from '@/components/AdvantageContent'
import { ArtistsCard } from '@/components/ArtistsCard'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Form } from '@/components/Form'

interface DpssType {
  name: string
  imageUrl: string
}

interface AdvantagesType {
  title: string
  text: string
  children: React.ReactNode
}

interface ArtistsType {
  name: string
  imageUrl: string
  description: string
}

const dpss: DpssType[] = [
  {
    name: 'Spotify',
    imageUrl: '/assets/spotify-logo.svg',
  },
  {
    name: 'iTunes',
    imageUrl: '/assets/apple-itunes-logo.svg',
  },
  {
    name: 'Deezer',
    imageUrl: '/assets/deezer-logo.svg',
  },
  {
    name: 'Youtube',
    imageUrl: '/assets/youtube-logo.svg',
  },
]

const advantages: AdvantagesType[] = [
  {
    title: 'Distribuição',
    text: 'Distribua sua música em todas as plataformas de forma simples com a nossa equipe, que está sempre em prontidão para lhe atender.',
    children: <LuMusic4 size={20} />,
  },
  {
    title: 'Insights',
    text: 'Saiba seus números de visualizações/ ouvintes de cada uma das plataformas, receba relatórios, saiba os seus valores e muito mais detalhes.',
    children: <LuBarChart3 size={20} />,
  },
  {
    title: 'Suporte',
    text: 'Suporte humanizado que lhe atende da melhor maneira possível e que te deixe por dentro de todos os assuntos.',
    children: <BiSupport size={20} />,
  },
  {
    title: 'Contato',
    text: 'Estamos sempre abertos e disponíveis para conversarmos e melhorarmos a sua vida e como você administra sua carreira. ',
    children: <LuContact2 size={20} />,
  },
]

const artists: ArtistsType[] = [
  {
    name: 'Raquel dos Teclados',
    imageUrl: '/images/raquel-dos-teclados.jpg',
    description:
      'A Rainha da Sofrência emplacou diversos hits e se tornou um fenômeno do gênero.',
  },
  {
    name: 'Toque Dez',
    imageUrl: '/images/toque-dez.jpg',
    description:
      'A Banda Toque Dez tem conseguido muitos ouvintes e gerado muitos hits, com mais de 300M de views no Youtube..',
  },
  {
    name: 'Romeu',
    imageUrl: '/images/romeu.jpg',
    description:
      'O astro do arrocha melódico vem se destacando cada vez mais e se tornou o cantor mais ouvido do Pará.',
  },
  {
    name: 'Chicão do Piseiro',
    imageUrl: '/images/chicao-do-piseiro.jpg',
    description:
      'O novo nome do piseiro, Chicão vem fazendo um sucesso estrondoso, com mais de 30M de views só no Youtube.',
  },
  {
    name: 'Pisadinha do Vaqueiro',
    imageUrl: '/images/pisadinha-do-vaqueiro.jpg',
    description:
      'A banda está em acelerada ascenção, lotando shows e contando com mais de 300mil ouvintes mensais no Spotify.',
  },
  {
    name: 'Banda Lapada de Amor',
    imageUrl: '/images/lapada-de-amor.png',
    description:
      'Uma das melhores bandas de forró românticas, já produziu várias músicas de sucesso e conta com 10M de views no Youtube.',
  },
]

export default function Home() {
  return (
    <div>
      <div className="relative overflow-hidden min-h-[535px] max-w-7xl w-full px-4 sm:px-8 md:px-12 pb-12 mx-auto">
        <div className="hidden slg:block">
          <div className="absolute w-[700px] h-[700px] -top-[100px] -right-[250px] -z-50 rounded-full border border-light-gray"></div>
          <div className="absolute w-[700px] h-[700px] top-[20px] right-0 -z-50 rounded-full border border-light-gray"></div>
        </div>

        <main className="w-full pt-12 flex flex-col slg:flex-row items-start gap-10 slg:gap-0 slg:justify-between">
          <div className="space-y-6">
            <h1 className="text-poppins text-3xl sm:text-5xl lgp:text-6xl font-bold max-w-[635px] lgp:max-w-[835px] text-pretty">
              Alavanque sua{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow via-dark-yellow to-darkest-yellow">
                carreira
              </span>{' '}
              e transforme sua melodia em{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow via-dark-yellow to-darkest-yellow">
                sucesso
              </span>
            </h1>

            <p className="max-w-[475px] lgp:max-w-[650px] text-sm lgp:text-base font-medium">
              A CMA Digital Music irá lidar com toda a burocracia e oferecer
              suporte para divulgação e o gerenciamento da sua carreira em
              diversas plataformas digitais e tradicionais, como emissoras de
              rádio. Siga conosco e conheça nossos projetos.
            </p>

            <div className="flex items-center justify-start gap-6">
              <CTAButton title="Venha fazer parte" colorVariant="black" />

              <Link
                href="#sobre"
                className="font-semibold text-sm slg:text-base underline underline-offset-2"
              >
                Saiba mais
              </Link>
            </div>

            <div className="flex flex-col items-center md:items-start gap-3 pt-4">
              <h4 className="text-sm md:text-base font-medium text-[#C8C8C8]">
                Plataformas
              </h4>

              <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-start gap-3">
                <div className="flex items-center justify-center md:justify-start gap-3 flex-wrap">
                  {dpss.map((dps) => (
                    <Image
                      src={dps.imageUrl}
                      alt={dps.name}
                      key={dps.name}
                      className="w-auto h-auto"
                      width={85}
                      height={25}
                    />
                  ))}
                </div>

                <span className="text-[10px] md:text-sm font-medium text-[#C8C8C8]">
                  e muito mais
                </span>
              </div>
            </div>
          </div>

          <div className="relative w-full md:w-[380px] flex items-center justify-center">
            <div className="absolute -z-10 w-[300px] h-[310px] sm:w-[340px] sm:h-[350px] rounded-full [background:radial-gradient(circle,#FAE42365_50%,#FAE42325_100%)] blur-xl"></div>

            <div className="relative w-[268px] h-[300px] sm:w-[300px] sm:h-[350px]">
              <div className="relative w-full h-full rounded-md overflow-hidden shadow-float">
                <Image
                  src={singer}
                  alt="Uma cantora no palco com um fundo preto."
                  className="object-cover"
                  fill
                  priority
                  quality={100}
                  sizes="(max-width: 845px) 100vw, 50vw"
                  placeholder="blur"
                />
              </div>

              <div className="w-[115px] absolute -top-[18px] -right-[4px] sm:-right-[50px] bg-white border border-light-gray rounded-[4px] p-[4px] space-y-[10px] shadow-float-thin">
                <div className="flex items-center justify-between text-gray">
                  <span className="text-poppins text-[10px] font-semibold">
                    Visualizações
                  </span>
                  <IoEyeOutline size={12} />
                </div>

                <span className="block text-poppins font-semibold text-sm text-end">
                  3.372.020
                </span>
              </div>
              <div className="w-[165px] absolute -bottom-[18px] -left-[4px] sm:-left-12 bg-white border border-light-gray rounded-[4px] p-[4px] space-y-[10px] shadow-float-thin">
                <div className="flex items-center justify-between text-gray">
                  <span className="text-poppins text-[10px] font-semibold">
                    Valores a receber
                  </span>
                  <LuDollarSign size={12} />
                </div>

                <div className="flex items-center justify-end gap-1 text-green">
                  <div className="flex items-center gap-[2px]">
                    <IoArrowUpCircleOutline size={10} />
                    <span className="block text-poppins font-normal text-[10px]">
                      19%
                    </span>
                  </div>

                  <span className="block text-poppins font-semibold text-sm">
                    U$ 4.278,28
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <section
        id="sobre"
        className="max-w-7xl w-full px-4 sm:px-8 md:px-12 mx-auto relative pb-16 border-t border-light-gray"
      >
        <div className="w-fit md:max-w-[515px] lg:max-w-[860px] md:w-full absolute -top-6 left-1/2 -translate-x-1/2 rounded-xl bg-white border border-light-gray p-6 lg:p-8 flex item-center gap-8">
          <h3 className="hidden lg:block text-poppins font-medium text-2xl max-w-[250px]">
            Nós ajudamos os artistas a atingerem seu potencial
          </h3>

          <div className="w-full flex flex-col gap-6 justify-center md:grid md:grid-cols-3">
            <div className="flex w-full md:w-[110px] flex-col items-center md:items-start justify-center">
              <span className="text-krona text-[32px]">+600</span>
              <p className="text-sm text-poppins font-medium text-center sm:text-left text-gray">
                Clientes
              </p>
            </div>

            <div className="flex w-full md:w-[130px] flex-col items-center md:items-start justify-center">
              <span className="text-krona text-[32px]">+15K</span>
              <p className="text-sm text-poppins font-medium text-center sm:text-left text-gray">
                Músicas lançadas
              </p>
            </div>

            <div className="flex w-full md:w-[145px] flex-col items-center md:items-start justify-center">
              <span className="text-krona text-[32px]">4.5B</span>
              <p className="text-sm text-poppins font-medium text-center sm:text-left text-gray">
                Em streamings
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center mt-[340px] md:mt-[160px] justify-center gap-5">
          <h2 className="relative inline underline-lastline text-poppins font-medium text-2xl sm:text-[32px] text-center">
            Sobre nós e nosso trabalho
          </h2>
          <p className="text-sm lgp:text-base font-medium max-w-[925px]">
            A CMA Digital Music possui 20 anos de experiência no gerenciamento
            de carreiras, produção musical, de shows e clipes, além de promover
            aproximação do artista com o público final de maneira eficiente.
            Fazemos sua música ganhar notoriedade tanto nos canais modernos de
            divulgação musical, quanto nas tradicionais rádios brasileiras.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <CTAButton title="Venha fazer parte" colorVariant="black" />

            <Link
              href="/sobre"
              className="font-semibold text-sm slg:text-base underline underline-offset-2"
            >
              Descubra mais sobre a CMA
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full overflow-hidden bg-black py-12">
        <div className="relative max-w-7xl w-full px-4 sm:px-8 md:px-12 mx-auto space-y-8 flex flex-col items-center justify-center">
          <div className="absolute -top-[260px] -left-[260px] z-10 w-[350px] h-[350px] rounded-full [background:radial-gradient(circle,#FAE42325_50%,#FAE42315_100%)] blur-3xl"></div>
          <div className="absolute -bottom-[200px] -right-[160px] z-10 w-[350px] h-[350px] rounded-full [background:radial-gradient(circle,#FAE42325_50%,#FAE42315_100%)] blur-3xl"></div>

          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-krona text-2xl sm:text-[36px] text-white">
              Estamos Aqui Para Cada Passo
            </h2>
            <span className="text-krona text-2xl sm:text-[36px] bg-clip-text text-transparent bg-gradient-to-r from-yellow via-dark-yellow to-darkest-yellow">
              Da Sua Carreira
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 gap-y-8 z-20">
            {advantages.map((info) => (
              <AdvantageContent
                title={info.title}
                text={info.text}
                key={info.title}
              >
                <AdvantageContent.Icon>{info.children}</AdvantageContent.Icon>
              </AdvantageContent>
            ))}
          </div>

          <CTAButton title="Venha fazer parte" colorVariant="yellow" />
        </div>
      </section>

      <section
        id="artistas"
        className="max-w-7xl w-full px-4 sm:px-8 md:px-12 mx-auto space-y-8 flex flex-col items-center justify-center py-12"
      >
        <h2 className="relative inline underline-lastline text-poppins font-medium text-2xl sm:text-[32px] text-center">
          Conheça nossos principais artistas
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 gap-y-8">
          {artists.map((artist) => (
            <ArtistsCard
              name={artist.name}
              imageUrl={artist.imageUrl}
              description={artist.description}
              key={artist.name}
            />
          ))}
        </div>

        <Link
          href="/artistas"
          className="font-semibold text-sm slg:text-base underline underline-offset-2"
        >
          Ver mais artistas
        </Link>
      </section>

      <section
        id="faq"
        className="max-w-7xl w-full px-4 sm:px-8 md:px-12 py-12 mb-5 mx-auto space-y-8 flex flex-col items-center justify-center"
      >
        <h2 className="relative inline underline-lastline text-poppins font-medium text-2xl sm:text-[32px] text-center">
          Perguntas Frequentes
        </h2>

        <div className="max-w-[700px] w-full mx-auto">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Como posso fazer parte da CMA?
              </AccordionTrigger>
              <AccordionContent>
                Para fazer parte da CMA basta ir na área de contato, preencher o
                formulário com as informações necessárias e enviar uma
                solicitação para nossa equipe. Normalmente a solicitação leva em
                torno de 72h para ser avaliada e enviada a resposta por email.
                Após isso é só seguir os passos descritos no correio eletrônico.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                Como faço para distribuir minha música pela Cma Digital Music?
              </AccordionTrigger>
              <AccordionContent>
                Distribuir sua música como artista independente é simples. Siga
                estes passos:
                <ul className="pt-2">
                  <li className="list-disc ml-4">
                    Clique em &apos;Venha fazer parte&apos; : Envie suas
                    informações para nossa equipe. Respondemos em até 3 dias
                    úteis;
                  </li>
                  <li className="list-disc ml-4">
                    Confirme os detalhes: Verifique se seu número de telefone
                    (preferencialmente WhatsApp) está correto para facilitar o
                    contato;
                  </li>
                  <li className="list-disc ml-4">
                    Acesso aprovado: Após a aprovação, nossa equipe solicitará
                    os conteúdos via WhatsApp ou email;
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                A CMA Digital Music registra minha faixa?
              </AccordionTrigger>
              <AccordionContent>
                Não, a CMA Digital Music é uma empresa de distribuição musical.
                Recomendamos procurar uma associação musical para realizar o
                registro de sua faixa.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                Quanto tempo leva para meu acesso estar pronto?
              </AccordionTrigger>
              <AccordionContent>
                Após a aprovação da equipe, seu acesso estará disponível em até
                7 dias úteis.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                A CMA Digital Music é uma produtora/gravadora?
              </AccordionTrigger>
              <AccordionContent>
                Sim, temos nosso próprio estúdio no interior baiano com
                tecnologia avançada e excelentes produtores. O estúdio está
                disponível para nossos clientes interessados em gravar e
                aprimorar a excelência de suas faixas. Entre em contato com
                nossa equipe para verificar a disponibilidade.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                Posso editar minha faixa após o lançamento?
              </AccordionTrigger>
              <AccordionContent>
                Sim, é possível realizar edições como capa, arquivo da faixa,
                nome, compositores e produtores. No entanto, algumas informações
                como ISRC, UPC e ARTISTA PRINCIPAL não podem ser alteradas
                diretamente. Para modificar esses detalhes, nossa equipe pode
                orientá-lo em um processo específico.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section
        id="contato"
        className="max-w-[880px] w-full mx-auto rounded-xl border border-light-gray bg-white p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4"
      >
        <div className="w-fit h-fit">
          <h2 className="text-poppins relative inline underline-lastline font-medium text-2xl sm:text-[32px] text-center md:text-left">
            Entre em contato e venha se tornar parte desse time!
          </h2>
        </div>

        <Form />
      </section>
    </div>
  )
}
