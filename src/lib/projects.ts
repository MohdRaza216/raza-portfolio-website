import { allProjects } from 'content-collections'

export const projects = [...allProjects].sort(
  (a, b) => a.order - b.order || (b.year ?? 0) - (a.year ?? 0),
)

export const projectId = (project: { _meta: { path: string } }) =>
  project._meta.path
