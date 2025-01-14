import { Localized } from '@fluent/react'
import React, { Component } from 'react'
import Pill from '../pill'
import { RouteComponentProps } from 'react-router'
import { Locale } from '../../../../stores/locale'
import { Notifications } from '../../../../stores/notifications'
import { Questions } from 'common/question'
import { CheckIcon } from '../../../ui/icons'
import ContributionPage, {
  SET_COUNT,
  ContributionPillProps,
} from './alsacienPage'
import { PlayButton } from '../../../primary-buttons/primary-buttons'

import { CrossIcon, OldPlayIcon } from '../../../ui/icons'

import './alsacien.css'

const questions: Questions[] = [
  {
    id: 0,
    question: {
      text: 'Une pomme',
      id: 'Q1',
    },
    responses: [
      {
        variants: ['FRH'],
        id: 1,
        clip: {
          sentence: { text: 'E Àppel' },
          audioSrc:
            'https://storage.googleapis.com/common-voice-prod-prod-clips/c5a0f50c-c8cc-4200-85ed-940292a4fce7/4c4c98823386b5f7d8c51016a679809b3194c083240c4c9d27e72d04ca07f4d6.mp3?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gke-prod%40moz-fx-common-voice-prod.iam.gserviceaccount.com%2F20250108%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250108T085550Z&X-Goog-Expires=43200&X-Goog-SignedHeaders=host&X-Goog-Signature=56fe1e42f4c09a5498228436a31ffb7b49501c2a54181f5ec8ea5b8086563e5bc9522010e26ab91f141752b35f7ea00babef37b334633d34ba86ddc2b77d170a87879c84bcac5e765483ada1968f9f39d91c50cbbcfc66a6ae302a6470c629e8a9dcc7a13431116f7701d6ad1fe248f0b2fb6134fdf8c7ca847ba99ee2a8b890f233a5fb61fe27c1410d9d8a649e6b3e98f7ecc9fce88da13334ddbf2c2fa40f3204f7c0fbce5594a8edeb59b927c862a6223da1c8b29885558b1c2424647f9c1fea5ac84ef76ff28f8dc40f2ce8dc7ea75f3dcd90932399c6dcf424f84e801452653661f6b960b7193e13a5d715249ec9816cf7a7a7eeaba8a4fb50071e1bab',
        },
      },
      {
        variants: ['FRM', 'BAN', 'BAS', 'HAL'],
        id: 1,
        clip: {
          sentence: { text: 'E Àpfel ' },
          audioSrc:
            'https://storage.googleapis.com/common-voice-prod-prod-clips/7d9b923e-a9bc-499e-89d6-4a9d7e780b8f/4ed9430875ec519e60fbf36e0303417d6a03ec01d9fd788822b9260894fc1728.mp3?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gke-prod%40moz-fx-common-voice-prod.iam.gserviceaccount.com%2F20250108%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250108T085551Z&X-Goog-Expires=43200&X-Goog-SignedHeaders=host&X-Goog-Signature=55026ea0e6290f19c15f3a55ab3654626e7ba90225cced7e139037064491a6d87152534d85fe0269f1d0cc8cdd9f7ca0ea639dee12d5b5468ef7ac0993a72c5e32982563528c74405505c51aa27b1057fb685efe1c677c76642aba6d3430be809db3192cec7dc98c513cf66339c882daa57aa12cd884d0451c8e49d1d2fa0a46f3b5474830b060f4a4398f815b563c00ce0a660d579cc98c80eb384d3594b8cea6d187b5dcf7e162fd10b73cce39a1c45a730c7fbc6021c2cae68620dfe25d80b7931e8a2493899ef98981d498113839a5284a5c21aae33bdec127127257e72ec6360b9b0700379f44ce8eb3f9cf11841296796940b2534dd31cc3589b6d5cf8',
        },
      },
    ],
  },
  {
    id: 1,
    question: {
      text: 'Une maison',
      id: 'Q2',
    },
    responses: [
      {
        variants: ['FRM'],
        id: 1,
        clip: {
          sentence: { text: 'E Haus' },
          audioSrc:
            'https://storage.googleapis.com/common-voice-prod-prod-clips/c5a0f50c-c8cc-4200-85ed-940292a4fce7/4c4c98823386b5f7d8c51016a679809b3194c083240c4c9d27e72d04ca07f4d6.mp3?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gke-prod%40moz-fx-common-voice-prod.iam.gserviceaccount.com%2F20250108%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250108T085550Z&X-Goog-Expires=43200&X-Goog-SignedHeaders=host&X-Goog-Signature=56fe1e42f4c09a5498228436a31ffb7b49501c2a54181f5ec8ea5b8086563e5bc9522010e26ab91f141752b35f7ea00babef37b334633d34ba86ddc2b77d170a87879c84bcac5e765483ada1968f9f39d91c50cbbcfc66a6ae302a6470c629e8a9dcc7a13431116f7701d6ad1fe248f0b2fb6134fdf8c7ca847ba99ee2a8b890f233a5fb61fe27c1410d9d8a649e6b3e98f7ecc9fce88da13334ddbf2c2fa40f3204f7c0fbce5594a8edeb59b927c862a6223da1c8b29885558b1c2424647f9c1fea5ac84ef76ff28f8dc40f2ce8dc7ea75f3dcd90932399c6dcf424f84e801452653661f6b960b7193e13a5d715249ec9816cf7a7a7eeaba8a4fb50071e1bab',
        },
      },
      {
        variants: ['FRH', 'BAN', 'BAS', 'HAL'],
        id: 2,
        clip: {
          sentence: { text: 'E Hüs' },
          audioSrc:
            'https://storage.googleapis.com/common-voice-prod-prod-clips/7d9b923e-a9bc-499e-89d6-4a9d7e780b8f/4ed9430875ec519e60fbf36e0303417d6a03ec01d9fd788822b9260894fc1728.mp3?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gke-prod%40moz-fx-common-voice-prod.iam.gserviceaccount.com%2F20250108%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250108T085551Z&X-Goog-Expires=43200&X-Goog-SignedHeaders=host&X-Goog-Signature=55026ea0e6290f19c15f3a55ab3654626e7ba90225cced7e139037064491a6d87152534d85fe0269f1d0cc8cdd9f7ca0ea639dee12d5b5468ef7ac0993a72c5e32982563528c74405505c51aa27b1057fb685efe1c677c76642aba6d3430be809db3192cec7dc98c513cf66339c882daa57aa12cd884d0451c8e49d1d2fa0a46f3b5474830b060f4a4398f815b563c00ce0a660d579cc98c80eb384d3594b8cea6d187b5dcf7e162fd10b73cce39a1c45a730c7fbc6021c2cae68620dfe25d80b7931e8a2493899ef98981d498113839a5284a5c21aae33bdec127127257e72ec6360b9b0700379f44ce8eb3f9cf11841296796940b2534dd31cc3589b6d5cf8',
        },
      },
    ],
  },
  {
    id: 2,
    question: {
      text: 'De la glace',
      id: 'Q3',
    },
    responses: [
      {
        variants: ['FRM'],
        id: 1,
        clip: {
          sentence: { text: 'Eis' },
          audioSrc:
            'https://storage.googleapis.com/common-voice-prod-prod-clips/c5a0f50c-c8cc-4200-85ed-940292a4fce7/4c4c98823386b5f7d8c51016a679809b3194c083240c4c9d27e72d04ca07f4d6.mp3?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gke-prod%40moz-fx-common-voice-prod.iam.gserviceaccount.com%2F20250108%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250108T085550Z&X-Goog-Expires=43200&X-Goog-SignedHeaders=host&X-Goog-Signature=56fe1e42f4c09a5498228436a31ffb7b49501c2a54181f5ec8ea5b8086563e5bc9522010e26ab91f141752b35f7ea00babef37b334633d34ba86ddc2b77d170a87879c84bcac5e765483ada1968f9f39d91c50cbbcfc66a6ae302a6470c629e8a9dcc7a13431116f7701d6ad1fe248f0b2fb6134fdf8c7ca847ba99ee2a8b890f233a5fb61fe27c1410d9d8a649e6b3e98f7ecc9fce88da13334ddbf2c2fa40f3204f7c0fbce5594a8edeb59b927c862a6223da1c8b29885558b1c2424647f9c1fea5ac84ef76ff28f8dc40f2ce8dc7ea75f3dcd90932399c6dcf424f84e801452653661f6b960b7193e13a5d715249ec9816cf7a7a7eeaba8a4fb50071e1bab',
        },
      },
      {
        variants: ['FRH', 'BAN', 'BAS', 'HAL'],
        id: 2,
        clip: {
          sentence: { text: 'Iss' },
          audioSrc:
            'https://storage.googleapis.com/common-voice-prod-prod-clips/7d9b923e-a9bc-499e-89d6-4a9d7e780b8f/4ed9430875ec519e60fbf36e0303417d6a03ec01d9fd788822b9260894fc1728.mp3?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gke-prod%40moz-fx-common-voice-prod.iam.gserviceaccount.com%2F20250108%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250108T085551Z&X-Goog-Expires=43200&X-Goog-SignedHeaders=host&X-Goog-Signature=55026ea0e6290f19c15f3a55ab3654626e7ba90225cced7e139037064491a6d87152534d85fe0269f1d0cc8cdd9f7ca0ea639dee12d5b5468ef7ac0993a72c5e32982563528c74405505c51aa27b1057fb685efe1c677c76642aba6d3430be809db3192cec7dc98c513cf66339c882daa57aa12cd884d0451c8e49d1d2fa0a46f3b5474830b060f4a4398f815b563c00ce0a660d579cc98c80eb384d3594b8cea6d187b5dcf7e162fd10b73cce39a1c45a730c7fbc6021c2cae68620dfe25d80b7931e8a2493899ef98981d498113839a5284a5c21aae33bdec127127257e72ec6360b9b0700379f44ce8eb3f9cf11841296796940b2534dd31cc3589b6d5cf8',
        },
      },
    ],
  },
  {
    id: 3,
    question: {
      text: 'Du lait',
      id: 'Q2',
    },
    responses: [
      {
        variants: ['FRH', 'FRM', 'BAN'],
        id: 1,
        clip: {
          sentence: { text: 'Melich' },
          audioSrc:
            'https://storage.googleapis.com/common-voice-prod-prod-clips/c5a0f50c-c8cc-4200-85ed-940292a4fce7/4c4c98823386b5f7d8c51016a679809b3194c083240c4c9d27e72d04ca07f4d6.mp3?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gke-prod%40moz-fx-common-voice-prod.iam.gserviceaccount.com%2F20250108%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250108T085550Z&X-Goog-Expires=43200&X-Goog-SignedHeaders=host&X-Goog-Signature=56fe1e42f4c09a5498228436a31ffb7b49501c2a54181f5ec8ea5b8086563e5bc9522010e26ab91f141752b35f7ea00babef37b334633d34ba86ddc2b77d170a87879c84bcac5e765483ada1968f9f39d91c50cbbcfc66a6ae302a6470c629e8a9dcc7a13431116f7701d6ad1fe248f0b2fb6134fdf8c7ca847ba99ee2a8b890f233a5fb61fe27c1410d9d8a649e6b3e98f7ecc9fce88da13334ddbf2c2fa40f3204f7c0fbce5594a8edeb59b927c862a6223da1c8b29885558b1c2424647f9c1fea5ac84ef76ff28f8dc40f2ce8dc7ea75f3dcd90932399c6dcf424f84e801452653661f6b960b7193e13a5d715249ec9816cf7a7a7eeaba8a4fb50071e1bab',
        },
      },
      {
        variants: ['BAS', 'HAL'],
        id: 2,
        clip: {
          sentence: { text: 'Melech' },
          audioSrc:
            'https://storage.googleapis.com/common-voice-prod-prod-clips/7d9b923e-a9bc-499e-89d6-4a9d7e780b8f/4ed9430875ec519e60fbf36e0303417d6a03ec01d9fd788822b9260894fc1728.mp3?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gke-prod%40moz-fx-common-voice-prod.iam.gserviceaccount.com%2F20250108%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250108T085551Z&X-Goog-Expires=43200&X-Goog-SignedHeaders=host&X-Goog-Signature=55026ea0e6290f19c15f3a55ab3654626e7ba90225cced7e139037064491a6d87152534d85fe0269f1d0cc8cdd9f7ca0ea639dee12d5b5468ef7ac0993a72c5e32982563528c74405505c51aa27b1057fb685efe1c677c76642aba6d3430be809db3192cec7dc98c513cf66339c882daa57aa12cd884d0451c8e49d1d2fa0a46f3b5474830b060f4a4398f815b563c00ce0a660d579cc98c80eb384d3594b8cea6d187b5dcf7e162fd10b73cce39a1c45a730c7fbc6021c2cae68620dfe25d80b7931e8a2493899ef98981d498113839a5284a5c21aae33bdec127127257e72ec6360b9b0700379f44ce8eb3f9cf11841296796940b2534dd31cc3589b6d5cf8',
        },
      },
    ],
  },
  {
    id: 4,
    question: {
      text: 'Un enfant',
      id: 'Q2',
    },
    responses: [
      {
        variants: ['FRH', 'FRM', 'BAN', 'BAS'],
        id: 1,
        clip: {
          sentence: { text: 'E Kind' },
          audioSrc:
            'https://storage.googleapis.com/common-voice-prod-prod-clips/c5a0f50c-c8cc-4200-85ed-940292a4fce7/4c4c98823386b5f7d8c51016a679809b3194c083240c4c9d27e72d04ca07f4d6.mp3?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gke-prod%40moz-fx-common-voice-prod.iam.gserviceaccount.com%2F20250108%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250108T085550Z&X-Goog-Expires=43200&X-Goog-SignedHeaders=host&X-Goog-Signature=56fe1e42f4c09a5498228436a31ffb7b49501c2a54181f5ec8ea5b8086563e5bc9522010e26ab91f141752b35f7ea00babef37b334633d34ba86ddc2b77d170a87879c84bcac5e765483ada1968f9f39d91c50cbbcfc66a6ae302a6470c629e8a9dcc7a13431116f7701d6ad1fe248f0b2fb6134fdf8c7ca847ba99ee2a8b890f233a5fb61fe27c1410d9d8a649e6b3e98f7ecc9fce88da13334ddbf2c2fa40f3204f7c0fbce5594a8edeb59b927c862a6223da1c8b29885558b1c2424647f9c1fea5ac84ef76ff28f8dc40f2ce8dc7ea75f3dcd90932399c6dcf424f84e801452653661f6b960b7193e13a5d715249ec9816cf7a7a7eeaba8a4fb50071e1bab',
        },
      },
      {
        variants: ['HAL'],
        id: 2,
        clip: {
          sentence: { text: 'E Chind' },
          audioSrc:
            'https://storage.googleapis.com/common-voice-prod-prod-clips/7d9b923e-a9bc-499e-89d6-4a9d7e780b8f/4ed9430875ec519e60fbf36e0303417d6a03ec01d9fd788822b9260894fc1728.mp3?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gke-prod%40moz-fx-common-voice-prod.iam.gserviceaccount.com%2F20250108%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250108T085551Z&X-Goog-Expires=43200&X-Goog-SignedHeaders=host&X-Goog-Signature=55026ea0e6290f19c15f3a55ab3654626e7ba90225cced7e139037064491a6d87152534d85fe0269f1d0cc8cdd9f7ca0ea639dee12d5b5468ef7ac0993a72c5e32982563528c74405505c51aa27b1057fb685efe1c677c76642aba6d3430be809db3192cec7dc98c513cf66339c882daa57aa12cd884d0451c8e49d1d2fa0a46f3b5474830b060f4a4398f815b563c00ce0a660d579cc98c80eb384d3594b8cea6d187b5dcf7e162fd10b73cce39a1c45a730c7fbc6021c2cae68620dfe25d80b7931e8a2493899ef98981d498113839a5284a5c21aae33bdec127127257e72ec6360b9b0700379f44ce8eb3f9cf11841296796940b2534dd31cc3589b6d5cf8',
        },
      },

      {
        variants: ['HAL'],
        id: 2,
        clip: {
          sentence: { text: 'E Ching' },
          audioSrc:
            'https://storage.googleapis.com/common-voice-prod-prod-clips/7d9b923e-a9bc-499e-89d6-4a9d7e780b8f/4ed9430875ec519e60fbf36e0303417d6a03ec01d9fd788822b9260894fc1728.mp3?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gke-prod%40moz-fx-common-voice-prod.iam.gserviceaccount.com%2F20250108%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250108T085551Z&X-Goog-Expires=43200&X-Goog-SignedHeaders=host&X-Goog-Signature=55026ea0e6290f19c15f3a55ab3654626e7ba90225cced7e139037064491a6d87152534d85fe0269f1d0cc8cdd9f7ca0ea639dee12d5b5468ef7ac0993a72c5e32982563528c74405505c51aa27b1057fb685efe1c677c76642aba6d3430be809db3192cec7dc98c513cf66339c882daa57aa12cd884d0451c8e49d1d2fa0a46f3b5474830b060f4a4398f815b563c00ce0a660d579cc98c80eb384d3594b8cea6d187b5dcf7e162fd10b73cce39a1c45a730c7fbc6021c2cae68620dfe25d80b7931e8a2493899ef98981d498113839a5284a5c21aae33bdec127127257e72ec6360b9b0700379f44ce8eb3f9cf11841296796940b2534dd31cc3589b6d5cf8',
        },
      },
    ],
  },
]

const VoteButton = ({
  kind,
  isClicked,
  response,
  variants,
  onClick,
  ...props
}: {
  kind: 'yes' | 'no'
  response: string
  isClicked: boolean
  variants: string[]
  onClick: (variant: string) => void // Attendez uniquement un paramètre `variant`
} & React.ButtonHTMLAttributes<any>) => (
  <button
    type="button"
    className={`vote-button - yes ${isClicked ? 'clicked' : ''}`}
    //className={'vote-button yes'}

    {...props}
    onClick={e => onClick(response)} // Passez `response` à la fonction `onClick`
  >
    <span>{response}</span>
  </button>
)

type State = {
  currentQuestionIndex: number
  Variant: string | null
  possibleVariants: string[]
  isPlaying: boolean[]
  audioRefs: React.RefObject<HTMLAudioElement>[]
  isClickedButtons: boolean[]
  selectedResponse: string[]
  isSubmitted: boolean
}
const initialState: State = {
  currentQuestionIndex: 0,
  Variant: null, // État pour la variante sélectionnée
  possibleVariants: [], // État pour les variantes de la question
  isPlaying: Array(questions[0].responses.length).fill(false),
  isClickedButtons: Array(questions[0].responses.length).fill(false),
  selectedResponse: [],
  isSubmitted: false,

  audioRefs: [
    React.createRef<HTMLAudioElement>(),
    React.createRef<HTMLAudioElement>(),
    React.createRef<HTMLAudioElement>(),
  ],
}

class AlsacienPage extends Component<{}, State> {
  // audioRef = React.createRef<HTMLAudioElement>()
  playedSomeInterval: any
  constructor(props: {}) {
    super(props)
    this.state = initialState
  }

  getVariant(arr: string[]): string | null {
    const frequencyMap: { [key: string]: number } = {}

    // Mapping des abréviations vers les noms complets
    const variantMap: { [key: string]: string } = {
      FRH: 'francique rhénan',
      FRM: 'francique rhénan méridional',
      BAN: 'bas alémanique du nord',
      BAS: 'bas alémanique du sud',
      HAL: 'haut-alémanique',
    }

    // Compter la fréquence de chaque élément
    arr.forEach(item => {
      frequencyMap[item] = (frequencyMap[item] || 0) + 1
    })

    let mostFrequentValue: string | null = null
    let maxFrequency = 0

    // Trouver la valeur la plus fréquente
    for (const key in frequencyMap) {
      if (frequencyMap[key] > maxFrequency) {
        mostFrequentValue = key
        maxFrequency = frequencyMap[key]
      }
    }

    // Retourner le nom complet correspondant, ou null si non trouvé
    return mostFrequentValue ? variantMap[mostFrequentValue] || null : null
  }

  getIsClicked = () => {
    return this.state.isClickedButtons.includes(true)
  }
  handleSkip = () => {
    const { currentQuestionIndex } = this.state

    if (currentQuestionIndex < questions.length - 1) {
      this.setState(prevState => ({
        currentQuestionIndex: prevState.currentQuestionIndex + 1,

        isPlaying: Array(
          questions[prevState.currentQuestionIndex + 1].responses.length
        ).fill(false),

        isClickedButtons: Array(
          questions[prevState.currentQuestionIndex + 1].responses.length
        ).fill(false),

        selectedResponse: [],
      }))
    }
  }

  handleNext = () => {
    const { currentQuestionIndex, selectedResponse, possibleVariants } =
      this.state
    const x = [...possibleVariants, ...selectedResponse]

    this.setState({
      possibleVariants: x,
      selectedResponse: [],
    })

    if (currentQuestionIndex < questions.length - 1) {
      this.setState(prevState => ({
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
        isPlaying: Array(
          questions[prevState.currentQuestionIndex + 1].responses.length
        ).fill(false),

        isClickedButtons: Array(
          questions[prevState.currentQuestionIndex + 1].responses.length
        ).fill(false),
      }))
    } else {
      console.log('Variant:', this.getVariant(x))
      this.setState({ isSubmitted: true, Variant: this.getVariant(x) })
    }
  }
  private stop = (ref: React.RefObject<HTMLAudioElement>, index: number) => {
    const audio = ref.current
    const newIsPlaying = [...this.state.isPlaying] // Créer une copie de l'état actuel

    if (audio) {
      audio.pause()
      audio.currentTime = 0
    }
  }

  private reset = () => this.setState(initialState)

  //private play = (ref: React.RefObject<HTMLAudioElement>) => {
  private play = (ref: React.RefObject<HTMLAudioElement>, index: number) => {
    const { audioRefs, isPlaying } = this.state

    const newIsPlaying = [...this.state.isPlaying] // Créer une copie de l'état actuel
    console.log(ref.current)
    const audio = ref.current

    if (newIsPlaying[index]) {
      newIsPlaying[index] = false
      this.setState({ isPlaying: newIsPlaying })
      this.stop(ref, index)
      return
    }
    audio.play()
    // Stop all currently playing audio except the one to be played

    audioRefs.forEach((audioRef, i) => {
      if (i !== index && isPlaying[i]) {
        const audio = audioRef.current
        if (audio) {
          audio.pause()
          audio.currentTime = 0 // Reset the audio playback position
          newIsPlaying[i] = false
        }
      }
    })

    if (newIsPlaying[index]) {
      newIsPlaying[index] = false // Mettre l'élément spécifique à `false` quand il est arrêté

      this.stop(ref, index)
    } else {
      audio?.play()
      newIsPlaying[index] = true // Mettre l'élément spécifique à `true` quand il commence
    }

    this.setState({ isPlaying: newIsPlaying }) // Mettre à jour l'état
  }

  handleVote = (
    variants: string[],
    response: string,
    questionId: number,
    index: number
  ) => {
    const isClicked = !this.state.isClickedButtons[index]

    if (this.getIsClicked()) {
      this.setState({
        isClickedButtons: Array(questions[0].responses.length).fill(false),
        selectedResponse: [],
      })
    }

    this.setState(prevState => ({
      isClickedButtons: prevState.isClickedButtons.map(
        (item, i) => (i === index ? isClicked : item) // Si l'index correspond, on met 'true'
      ),
      selectedResponse: variants,
    }))
  }

  render() {
    const { currentQuestionIndex, isClickedButtons, isSubmitted, Variant } =
      this.state
    const currentQuestion = questions[currentQuestionIndex]
    const exampleProps = {
      hasErrors: false,
      sentences: questions.map(q => q.question),

      reportModalProps: {
        onRequestClose: () => console.log('Report Modal Fermé'),
        kind: 'sentence' as 'sentence' | 'clip',
        id: '123',
        reasons: ['reason1', 'reason2'],
      },

      isPlaying: false,

      primaryButtons: (
        <>
          <div className="primary-buttons">
            {currentQuestion.responses.map((response, index) => (
              <div
                key={response.id}
                className="button-pair"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}>
                <audio
                  ref={this.state.audioRefs[index]}
                  src={response.clip.audioSrc}
                />
                <PlayButton
                  onClick={() => this.play(this.state.audioRefs[index], index)}
                  isPlaying={this.state.isPlaying[index]}
                  trackClass="variant"
                />
                <VoteButton
                  kind="yes"
                  isClicked={isClickedButtons[index]}
                  response={response.clip.sentence.text}
                  variants={response.variants}
                  onClick={() =>
                    this.handleVote(
                      response.variants,
                      response.clip.sentence.text,
                      response.id,
                      index
                    )
                  }
                  disabled={false}
                  data-testid="vote-yes-button"
                />
              </div>
            ))}
          </div>
        </>
      ),

      pills: questions.map(question => (props: ContributionPillProps) => {
        const isValid = true
        const isVoted = currentQuestionIndex > question.id
        const isActive = currentQuestionIndex === question.id
        return (
          <Pill
            className={isVoted ? (isValid ? 'valid' : 'invalid') : ''}
            onClick={null}
            status={isActive ? 'active' : isVoted ? 'done' : 'pending'}
            {...props}>
            {isActive ? (
              <></>
            ) : isVoted ? (
              isValid ? (
                <CheckIcon />
              ) : (
                <CrossIcon />
              )
            ) : null}
          </Pill>
        )
      }),

      shortcuts: [
        { key: 's', label: 'Passer', action: () => console.log('Passé') },
      ],

      flags: { featureEnabled: true },
      locale: 'en',
      user: { account: { id: 1, name: 'Utilisateur' } },
      type: 'variant' as 'speak' | 'listen' | 'variant',
    }

    return (
      <>
        <div id="alsacien-page">
          <ContributionPage
            {...exampleProps}
            onReset={this.reset}
            onSkip={this.handleSkip}
            onNext={this.handleNext}
            activeIndex={currentQuestionIndex}
            isSubmitted={isSubmitted}
            userVariant={Variant}
            isClicked={this.getIsClicked()}
            instruction={props => (
              <>
                <Localized
                  id={
                    currentQuestionIndex === SET_COUNT
                      ? 'listen-last-time-instruction'
                      : [
                          'variant-instruction',
                          'listen-again-instruction',
                          'listen-3rd-time-instruction',
                        ][currentQuestionIndex] || 'listen-again-instruction'
                  }
                  elems={{ playIcon: <OldPlayIcon /> }}
                  {...props}
                />
              </>
            )}
          />
        </div>
      </>
    )
  }
}

export default AlsacienPage
