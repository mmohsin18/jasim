import { type SchemaTypeDefinition } from 'sanity'
import publications from './publications'
import peopleleft from './peopleleft'
import peopleright from './peopleright'
import jasimimg from './jasimimg'
import themes from './themes'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [publications, peopleleft, peopleright, jasimimg, themes],
}
