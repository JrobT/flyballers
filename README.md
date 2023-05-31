# Flyballers

_Flyballers_ is a Jamstack application for managing Flyball events. The motivation for this application is it create an alternative to [Flyball Geek](https://flyballgeek.com/).

## Development

### Redwood

For development, check out [RedwoodJS](https://redwoodjs.com).

> **Prerequisites**
>
> - Redwood requires [Node.js](https://nodejs.org/en/) (>=18.x) and [Yarn](https://yarnpkg.com/) (>=1.15).
> - Are you on Windows? For best results, follow their [Windows development setup](https://redwoodjs.com/docs/how-to/windows-development-setup) guide.

Start by installing dependencies:

```shell
yarn install
```

Then start the development server:

```shell
yarn redwood dev
```

Your browser should automatically open to <http://localhost:8910>.

> **The Redwood CLI**
>
> Congratulations on running your first Redwood CLI command!
> From dev to deploy, the CLI is with you the whole way.
> And there's quite a few commands at your disposal: `yarn redwood --help`.
> For all the details, see the [CLI reference](https://redwoodjs.com/docs/cli-commands).

#### Prisma and the database

Redwood wouldn't be a full-stack framework without a database. It all starts with the schema.

Redwood uses [Prisma](https://www.prisma.io/), a next-gen Node.js and TypeScript ORM, to talk to the database. Prisma's schema offers a declarative way of defining your app's data models. And Prisma [Migrate](https://www.prisma.io/migrate) uses that schema to make database migrations hassle-free:

```shell
yarn rw prisma migrate dev

# ...

? Enter a name for the new migration: › create posts
```

> `rw` is short for `redwood`

You'll be prompted for the name of your migration, e.g. 'create posts'.

Now you can generate everything we need to perform all the CRUD (Create, Retrieve, Update, Delete) actions on our model:

```shell
yarn redwood g scaffold post
```

Navigate to <http://localhost:8910/posts/new>, fill in the title and body, and click "Save":

Did we just create a post in the database? Yup! With `yarn rw g scaffold <model>`, Redwood created all the pages, components, and services necessary to perform all CRUD actions on our posts table.

#### Frontend first with Storybook

Don't know what your data models look like?

That's more than ok — Redwood integrates Storybook so that you can work on design without worrying about data.

Mockup, build, and verify your React components, even in complete isolation from the backend:

```shell
yarn rw storybook
```

Before you start, see if the CLI's `setup ui` command has your favorite styling library:

```shell
yarn rw setup ui --help
```

#### Testing with Jest

Redwood fully integrates Jest with the front and the backends and makes it easy to keep your whole app covered by generating test files with all your components and services:

```shell
yarn rw test
yarn rw test --no-watch
```

To make the integration even more seamless, Redwood augments Jest with database [scenarios](https://redwoodjs.com/docs/testing.md#scenarios) and [GraphQL mocking](https://redwoodjs.com/docs/testing.md#mocking-graphql-calls).

To run integration tests locally, Prisma requires a local running Postgres instance to use as its test database. The `docker-compose.yml` file at the root of this project provides this as a service in a helpful docker container. To spin up the container, run:

```shell
yarn docker:up
```

After which you can run Jest as per Redwood's design. Alternatively, if you wanted to run the full test suite locally, you can do that using the NPM script `yarn test`.

You can also take down the container once you've finished running integration tests:

```shell
yarn docker:down
```

To ensure that we run our full suite of tests on push via CI, we run the local Postgres service from within GitHub Actions. See `.github/workflows/ci.yml`.

#### Ship it

Redwood is designed for both serverless deploy targets like Netlify and Vercel and serverful deploy targets like Render and AWS:

```shell
yarn rw setup deploy --help
```

Don't go live without auth!

Lock down your front and backends with Redwood's built-in, database-backed authentication system ([dbAuth](https://redwoodjs.com/docs/authentication#self-hosted-auth-installation-and-setup)), or integrate with nearly a dozen third party auth providers:

```shell
yarn rw setup auth --help
```

#### Next Steps

The best way to learn Redwood is by going through the comprehensive [tutorial](https://redwoodjs.com/docs/tutorial/foreword) and joining the community (via the [Discourse forum](https://community.redwoodjs.com) or the [Discord server](https://discord.gg/redwoodjs)).

### Linting and Formatting

We use ESLint and Prettier to lint our code. The configuration for both is largely the Redwood defaults for TypeScript.

Each has their own ignore file: `.eslintignore` and `.prettierignore`, which should only be used for files that:

- Aren't committed into version control.
- Are automatically generated.

You can run linting manually via the Yarn scripts:

```shell
yarn lint
yarn format
```

## Design

### Atomic Design

Atomic design is a methodology for creating user interfaces that breaks down complex UIs into smaller, reusable building blocks called atoms, which can be combined to form more complex components and templates.

- **Atoms**: The smallest building blocks of a UI, such as buttons, inputs, and labels.
- **Molecules**: A group of atoms that work together to perform a specific task, such as a search bar.
- **Organisms**: A group of molecules that work together to form a more complex UI component, such as a navigation menu.
- **Templates**: A group of organisms arranged in a specific layout to form a reusable, consistent design pattern.
- **Pages**: A specific instance of a template that contains actual content.

To incorporate atomic design in a Redwood project, you can follow these steps:

- Identify the atoms: Identify the basic UI elements that you want to use in your project, such as buttons, inputs, and labels.
- Create molecules: Combine the atoms to create more complex UI elements, such as a search bar or a form.
- Build organisms: Combine the molecules to create even more complex UI components, such as a navigation menu or a card.
- Create templates: Arrange the organisms in a specific layout to form reusable design patterns, such as a login page or a dashboard.
- Build pages: Use the templates to create specific instances of your UI, such as a login page with actual content.

## Infrastructure

### Supabase

_Flyballers_ was built using [Supabase](https://supabase.com/) on the backend.

For development, please create your own test database within your account. Once you've done that, set the relevant environment variables in your `.env` file as per the [documentation](https://supabase.com/docs/guides/integrations/prisma#connection-pooling-with-supabase).

### Vercel

_Flyballers_ is deployed on merge to the `main` branch using [Vercel](https://vercel.com/).

## Contributing

Please contact Jack Trute via [Bassett Allsorts](http://www.bassettallsorts.co.uk/index.html) Flyball team on Facebook. If you have a pull request, please raise it with:

- A suitable description.
- Any Jest/Storybook tests.
- As few file changes as possible to complete your feature or fix.

and I will get back to you when able.
