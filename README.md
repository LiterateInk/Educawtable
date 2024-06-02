<p align="center">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://github.com/LiterateInk/Educawtable/blob/facfbf748d67c0768e0b34be127f38f4a41dc9f5/.github/Educawtable%20Dark.png">
        <img alt="Educawtable Logo" src="https://github.com/LiterateInk/Educawtable/blob/facfbf748d67c0768e0b34be127f38f4a41dc9f5/.github/Educawtable%20Light.png">
    </picture>
</p>

[EDUMOOV's Educartable](https://www.educartable.com/) is an application dedicated to primary school teachers, designed to simplify classroom management. It lets you track and share assessments, textbooks and student progress, as well as communicate with parents. The aim is to make classroom management more fluid and strengthen communication between school and home.

Educawtable is a simple wrapper around [EDUMOOV's Educartable](https://www.educartable.com/) internal API.

> [!NOTE]  
> This project is not affiliated with EDUMOOV or Educartable in any way.

## Status

Currently in reverse engineering phase.
The API is not stable and may change at any time.

## Todo

- [x] Account
  - [x] Parent
- [ ] Connexion
  - [x] with credentials
  - [x] with credentials + OTP
  - [ ] with ENT
- [ ] Features
  - [x] User Informations
  - [ ] Lessons
    - [x] Read
    - [x] Check (change state)
    - [x] Achievement
    - [ ] Access to files URLs
  - [ ] Discussions
    - [x] Create
    - [x] Read
    - [ ] Write messages
      - [x] Text
      - [ ] Add files
    - [x] Delete messages
    - [x] Delete / Archive discussion
  - [x] Surveys
    - [x] Read
    - [x] Answer
    - [x] Delete answers
  - [ ] Class News
    - [x] Read
    - [x] Like
      - [x] Add
      - [x] Delete
    - [x] Reply
      - [x] Read
      - [x] Write
      - [x] Delete
    - [ ] Access to files URLs
  - [x] Pupils (view Familly)
  - [ ] Transcript
   

## Development

```bash
git clone https://github.com/LiterateInk/Educawtable
pnpm install # Please, use pnpm as package manager
```

If you want to run a file inside `examples` from this repository, use `pnpm tsx examples/your-example.ts`.

> [!NOTE]
> Implementation is done on the mobile version of the app, located at <https://mobile.educartable.com/?standalone=1>.

## Get help

Join [LiterateInk's Discord server](https://discord.gg/f5KNCnMWzB) to talk about Pawnote, get help and be notified about the latest updates !

## Credits

- Worked in collaboration with [Tom THERET](https://github.com/tom-theret).

## License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details.