import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'
import { SanityClient } from 'sanity';

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

