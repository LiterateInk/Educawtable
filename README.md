# Educawtable - A purrfect API wrapper for Educartable

A simple wrapper around [EDUMOOV's Educartable](https://www.educartable.com/) internal API.

> [!NOTE]  
> This project is not affiliated with EDUMOOV or Educartable in any way.

> Join [LiterateInk's Discord server](https://literate.ink/discord) to talk about Educawtable, get help and be notified about the latest updates !

## Status

Currently in reverse engineering phase.
The API is not stable and may change at any time.

## Todo

- [x] Account
  - [x] Parent
  - [x] Teacher
- [ ] Connexion
  - [x] with credentials
  - [x] with credentials + OTP
  - [ ] With ENT
- [ ] Features
  - [x] User Informations
  - [ ] Lessons
    - [x] Read
    - [x] Check (change state)
    - [ ] Access to files URLs
  - [ ] Discussions
    - [ ] Create
    - [x] Read
    - [x] Write messages
    - [x] Delete messages
    - [ ] Delete / Archive discussion
  - [ ] Surveys
    - [x] Read
    - [ ] Reply / Complete
    - [ ] (Remove reply)
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

## Credits

- Worked in collaboration with [Tom THERET](https://github.com/tom-theret).
