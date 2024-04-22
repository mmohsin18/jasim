import { type SchemaTypeDefinition } from 'sanity'
import publications from './publications'
import peopleleft from './peopleleft'
import peopleright from './peopleright'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [publications, peopleleft, peopleright],
}
