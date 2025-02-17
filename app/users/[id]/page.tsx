import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    id: number;
  };
}

const UseDetailPage = ({ params: { id } }: Props) => {
  if (id > 10) notFound();
  return <div>UseDetailPage {id}</div>;
};

export default UseDetailPage;
