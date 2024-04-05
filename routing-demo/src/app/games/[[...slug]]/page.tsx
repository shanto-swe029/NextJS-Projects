export default function Games({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  if (params.slug?.length === 2) {
    return (
      <h1>
        Viewing Result {params.slug[1]} of Game {params.slug[0]}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1>Viewing Game {params.slug[0]}</h1>;
  }
  return <h1>Games home page</h1>;
}
