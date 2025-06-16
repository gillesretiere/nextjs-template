import { useTranslations } from 'next-intl';
import choose_language from "../../../assets/img/saynete_ch_lang_ipad_port.png";
import choose_saynete from "../../../assets/img/saynete_ch_story_ipad_landscape.png";
import mockup_3_devices from "../../../assets/img/saynetes_mockup_3-C.png";

import Image from 'next/image';


export default function About() {
  const t = useTranslations('')
  return (
    <>
      <div className='flex-col px-4 text-2xl text-left'>
        <div className='pb-32'>
          <h1><span className='text-red-500'>LES SAYNÈTES C&apos;EST QUOI ?</span></h1>
          <p className='text-base lg:w-3/4'>
            Les saynètes sont de petites histoires mettant en scène des personnages.
            Elles ont pour objectif de sensibiliser sur des thèmes comme le diabète, l&apos;alimentation et la pratique d&apos;exercices physiques, à l&apos;usage des patients non francophones et de leur entourage.
          </p>
          <img src="https://saynetes.fr/static/media/team_saynetes.98109558ed28add88ef7.png" className='flex items-center my-4 w-full sm:w-3/4'></img>
        </div>
        <div className='pb-32'>
          <h1><span className='text-red-500'>COMMENT ÇA MARCHE ?</span></h1>
          <p className='text-base lg:w-3/4'>
            L&apos;application fonctionne à base de cartes illustrées, qui permettent d&apos;aller du global (la langue) au détail (mot de vocabulaire).
            On choisit d&apos;abord une langue, puis une histoire (saynète) dans cette langue.
            Ensuite, les dialogues s&apos;affichent toujours sous forme de cartes avec texte et audio.
            Les mots de vocabulaire à retenir sont surlignés et complétés par une mini-carte d&apos;explications.</p>
          <Image src={choose_language} alt="" className='flex my-4 object-cover w-full sm:w-3/4' />
          <Image src={choose_saynete} alt="" className='flex my-4 object-cover w-full sm:w-3/4' />

        </div>
        <div className='pb-32'>
          <h1><span className='text-red-500'>POUR QUOI FAIRE ?</span></h1>
          <p className='text-base lg:w-3/4'>
            Contribuer à lever les barrières de la langue et les incompréhensions culturelles.
            Par la réalisation d&apos;outils numériques qui aident à la communication entre professionnels et non francophones.
            Les saynètes permettent d&apos;aborder des thèmes de santé et de société avec une approche particulière.
          </p>
          <Image src={mockup_3_devices} alt="" className='flex my-4 object-cover w-full sm:w-3/4' />
        </div>
      </div>

    </>

  )
}
