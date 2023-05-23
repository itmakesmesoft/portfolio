import projectData from "../data/projects.json";
export const ProjectDetail = (props: any) => {
  const projectId = props.id;
  let data;
  for (const project of projectData.list) {
    if (project.id === projectId) {
      data = project;
      break;
    }
  }
  if (!data) return <p>자료 없음</p>;

  return (
    <div>
      <p>{data?.title}</p>
    </div>
  );
};
