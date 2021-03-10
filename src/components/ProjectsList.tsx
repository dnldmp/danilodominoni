interface ProjectListProps {
  challenge: string;
  image: string;
}

export function ProjectList(props: ProjectListProps) {
  return (
    <>
      <strong>Desafio</strong>
      <p>{props.challenge}</p>
      <img src={props.image} />
    </>
  );
}
