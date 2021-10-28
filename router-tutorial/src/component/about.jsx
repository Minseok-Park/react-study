import queryString from "query-string";

export default function About(props) {
  const searchParams = props.location.search;
  console.log(searchParams);
  // const obj = new URLSearchParams(searchParams);
  // console.log(obj.get(`name`));

  const query = queryString.parse(searchParams);
  console.log(query);
  return (
    <div>
      About 페이지입니다.
      {query.name && <p>name은 {query.name}입니다.</p>}
    </div>
  );
}
