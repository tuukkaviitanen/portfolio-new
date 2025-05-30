import Links from "./components/Links";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import { PrimaryTitle } from "./components/Typography";
import type { PopulatedConfiguration } from "./utils/types";

type AppParams = { configuration: PopulatedConfiguration };

const App = ({ configuration }: AppParams) => {
  const { links, projects, description, image_url, name, title } =
    configuration;
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta name="author" content={name} />
        <link rel="icon" href={configuration.image_url} />
        <title>{configuration.title}</title>
        <link href="./styles.css" rel="stylesheet" />
      </head>
      <body className="--font-geist-sans --font-geist-mono antialiased bg-gray-50 dark:bg-primary text-primary dark:text-white selection:bg-accent/90 selection:text-white/90">
        <main className="min-h-screen x-5">
          <header className="bg-primary text-white py-4 dark:bg-secondary">
            <PrimaryTitle>{title}</PrimaryTitle>
          </header>
          <div className="container mx-auto p-6">
            <Profile
              description={description}
              image_url={image_url}
              name={name}
            />
            <Links links={links} />
            <Projects projects={projects} />
          </div>
        </main>
      </body>
    </html>
  );
};

export default App;
