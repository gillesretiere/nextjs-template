import { useTranslations } from 'next-intl'


export default function About() {
  const t = useTranslations('')
  return (
    <>
      {
        /*
        <div className='px-32 py-24 text-center text-2xl'>
          {t(
            'This_is_a_simple_about_page_just_to_show_how_you_can_use_the_internationalization_in_different_pages'
          )}
        </div>
        */
      }

      <div className='flex-col px-32 py-24 text-2xl text-left'>
        <div className='pb-32'>
          <h1><span className='text-red-500'>LES SAYNÈTES C&apos;EST QUOI ?</span></h1>
          <p className='text-base lg:w-1/2'>
            Les saynètes sont de petites histoires mettant en scène des personnages.
            Elles ont pour objectif de sensibiliser sur des thèmes comme le diabète, l&apos;alimentation et la pratique d&apos;exercices physiques, à l&apos;usage des patients non francophones et de leur entourage.
          </p>
          <img src="https://saynetes.fr/static/media/team_saynetes.98109558ed28add88ef7.png" className='flex my-4 lg:w-1/2'></img>
        </div>
        <div className='pb-32'>
          <h1><span className='text-red-500'>COMMENT ÇA MARCHE ?</span></h1>
          <p className='text-base lg:w-1/2'>
            L&apos;application fonctionne à base de cartes illustrées, qui permettent d&apos;aller du global (la langue) au détail (mot de vocabulaire).
            On choisit d&apos;abord une langue, puis une histoire (saynète) dans cette langue.
            Ensuite, les dialogues s&apos;affichent toujours sous forme de cartes avec texte et audio.
            Les mots de vocabulaire à retenir sont surlignés et complétés par une mini-carte d&apos;explications.</p>
          <img src="https://saynetes.fr/static/media/pf_saynetes.7603ff2ee12a0460ddb1.png?w=248&fit=crop&auto=format" className='flex my-4 lg:w-1/2'></img>
        </div>
        <div className='pb-32'>
          <h1><span className='text-red-500'>POUR QUOI FAIRE ?</span></h1>
          <p className='text-base lg:w-1/2'>
            Contribuer à lever les barrières de la langue et les incompréhensions culturelles.
            Par la réalisation d&apos;outils numériques qui aident à la communication entre professionnels et non francophones.
            Les saynètes permettent d&apos;aborder des thèmes de santé et de société avec une approche particulière.
          </p>
        </div>
      </div>

    </>

  )
}
