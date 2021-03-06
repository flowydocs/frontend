import { Header, UnstyledButton, Group } from "@mantine/core";
import type { GetServerSideProps, NextPage } from "next";
import { resetServerContext } from "react-beautiful-dnd";
import ProjectLayout from "../../../components/layout/project-layout";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import OverviewProjectComponent from "../../../feature/projects/overview";
import { ProjectDefaultHeader } from "../../../components/headers/project-default-header";

const Project: NextPage = () => {
  return (
    <ProjectLayout
      header={<ProjectDefaultHeader></ProjectDefaultHeader>}
    >
      <OverviewProjectComponent></OverviewProjectComponent>
    </ProjectLayout>
  );
};

export default Project;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  resetServerContext(); // <-- CALL RESET SERVER CONTEXT, SERVER SIDE

  return { props: { data: [] } };
};
