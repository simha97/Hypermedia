import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {
  const id = event.context.params.id;
  const client = serverSupabaseClient(event);

  const { data, error } = await client
    .from('persons')
    .select(`id, name, surname, age, story, degree, mainExpertise, isFounder, pastJobExperience, slogan, projects(id, projectTitle, city, mainIdea, areas(name))`)
    .eq('id', id)
    .limit(1)
    .single();

  if (error) {
    throw createError({ statusCode: 400, statusMessage: error.message });
  }

  return data;
});