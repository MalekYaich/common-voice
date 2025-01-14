import { Sentence ,Clip} from './clips';



export type Questions = {
  id: number // Un identifiant unique pour la question
  question: Sentence
  responses: Response[] // Liste des réponses possibles
}

export type Response = {
  clip: Clip // Le texte de la réponse
  variants: string[] // Les variantes associées à la réponse
  id: number // Un identifiant unique pour la réponse
}


