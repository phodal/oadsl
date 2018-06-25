export interface IWorkflow {
  name: string
  status: string
}

export function workflowParser(data: any) {
  const keys = Object.keys(data)
  const results = []
  for (let key of keys) {
    let process = data[key] as IWorkflow
    results.push({
      name: process.name,
      status: process.status,
      icon: `icon-${process.status}`
    })
  }

  return results
}
