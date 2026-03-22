import Main from "./containers/Main";
import FilmsSection from "./containers/Main/components/FilmsSection";
import FormSection from "./containers/Main/components/FormSection";
import TeamSection from "./containers/Main/components/TeamSection";

export default function Home() {
  return (
    <>
      <Main />
      <FilmsSection />
      <TeamSection />
      <FormSection />
    </>
  );
}
