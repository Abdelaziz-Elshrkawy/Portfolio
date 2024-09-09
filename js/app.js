//global variables
const navUl = document.getElementById('nav-content')
const upBtn = document.getElementById('up');
const resumeAnchor = document.getElementsByClassName('resumeAnchor');
const certificates = document.getElementById('certificates');
const skillsList = document.getElementById('skills-list');
const copyBtn = document.getElementById('copy');
const email = document.getElementById('email-text');
const section = document.querySelectorAll('section');
const pageTitle = document.getElementById('page-title');
const titleAnchor = document.getElementById('title-anchor');

// object to store changeable data
const data = {
    skills: [
        {
            name: 'html',
            percent: '90%',
            logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg'
        },
        {
            name: 'css',
            percent: '70%',
            logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg'
        },
        {
            name: 'javascript',
            percent: '70%',
            logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
        },
        {
            name: 'typescript',
            percent: '70%',
            logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg'
        },
        {
            name: 'node.js',
            percent: '60%',
            logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg'
        },
        {
            name: 'express.js',
            percent: '60%',
            logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg'
        },
        {
            name: 'postgresql',
            percent: '60%',
            logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg'
        },
        {
            name: 'mongodb',
            percent: '50%',
            logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg'
        },
        {
            name: 'angular',
            percent: '50%',
            logo: 'https://angular.io/assets/images/logos/angular/angular.svg'
        }
    ],
    resumeLink: 'https://docs.google.com/document/d/1aBY0Y8nd-RnYy24lyWNM5UBSwfTM139p/edit',
    certificates: [
        {
            name: 'Challenger',
            link: 'https://drive.google.com/file/d/1hI7BT0vrBByRjzr1RVJrjAZx2h0Cv_B7/view',
            date: 'JAN 2022'
        },
        {
            name: 'Advanced Full Stack NanoDegree',
            link: 'https://graduation.udacity.com/confirm/LMVD9N2T',
            date: 'AUG 2022',
            projects: {

            }
        },
        {
            name: 'Angular NanoDegree',
            link: 'https://graduation.udacity.com/confirm/GAG2YEXD',
            date: 'OCT 2022'
        }
    ],
    provider: [
        {
            name: 'udacity',
            logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0IiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTQ0IDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIuMTc4OTggNy44OTQ0M0w5LjA0MDY0IDMuOTEzMzlWMTUuMDg0N0M5LjAyNzEgMTkuMjI4MiAxMS45MzY5IDIyLjkzODQgMTUuOTQyOSAyMy45MTM0TDE2LjAzNzYgMjMuOTQwNUwxNS45ODM1IDI0LjAwODJDMTUuODg4OCAyNC4xMyAxNS44MDc2IDI0LjIzODQgMTUuNjk5MyAyNC4zNDY3QzE1LjMzMzkgMjQuNzEyMyAxNC45NDE0IDI1LjAzNzMgMTQuNTA4MyAyNS4zMjE2QzE0LjA3NTIgMjUuNjA2IDEzLjYyODYgMjUuODQ5NyAxMy4xNTQ5IDI2LjA1MjlDMTIuNjY3NyAyNi4yNTYgMTIuMTY3IDI2LjQwNDkgMTEuNjUyNyAyNi41MTMzQzExLjExMTMgMjYuNjIxNiAxMC42NTEyIDI2LjY3NTcgMTAuMTUwNCAyNi42NzU3SDEwLjA5NjNDOS41NTQ5MiAyNi42NzU3IDkuMDEzNTcgMjYuNjIxNiA4LjQ4NTc1IDI2LjUxMzNDNy45NzE0NyAyNi40MDQ5IDcuNDcwNzEgMjYuMjU2IDYuOTgzNDkgMjYuMDM5M0M2LjUwOTgxIDI1LjgzNjIgNi4wNDk2NiAyNS41OTI1IDUuNjMwMTEgMjUuMzA4MUM1LjIxMDU2IDI1LjAyMzcgNC44MDQ1NSAyNC42OTg4IDQuNDUyNjcgMjQuMzMzMkM0LjA4NzI1IDIzLjk2NzYgMy43NjI0NCAyMy41NzQ5IDMuNDc4MjMgMjMuMTU1MUMzLjE5NDAyIDIyLjcyMTggMi45NTA0MSAyMi4yNzQ5IDIuNzQ3NCAyMS44MDFDMi41NDQ0IDIxLjMyNzEgMi4zOTU1MyAyMC44MjYgMi4yODcyNSAyMC4zMTE1QzIuMTc4OTggMTkuNzU2MyAyLjE2NTQ1IDE5LjE4NzYgMi4xNjU0NSAxOC43MDAxVjcuOTM1MDVMMi4xNzg5OCA3Ljg5NDQzWk0xOS40MzQ2IDIxLjk3N0MxOS44MjcxIDIwLjg2NjcgMjAuMDMwMSAxOS43Njk5IDIwLjA0MzYgMTguNzQwN1Y2LjkzMzAyTDI1LjI0MDYgMy45NTQwMVYxNS4xMjUzQzI1LjI0MDYgMTUuNjI2MyAyNS4xODY1IDE2LjExMzggMjUuMTA1MyAxNi41NDcxQzI1LjAxMDYgMTYuOTk0IDI0Ljg3NTIgMTcuNDQwOCAyNC42ODU4IDE3Ljg3NDFDMjQuNTA5OCAxOC4yOTM5IDI0LjI3OTcgMTguNzAwMSAyNC4wMjI2IDE5LjA2NTdDMjMuNzY1NSAxOS40NDQ5IDIzLjQ2NzcgMTkuNzk2OSAyMy4xNTY0IDIwLjEwODRDMjIuODMxNiAyMC40MzM0IDIyLjQ3OTcgMjAuNzE3NyAyMi4xMDA4IDIwLjk3NUMyMS43MjE4IDIxLjIzMjMgMjEuMzE1OCAyMS40NDg5IDIwLjg5NjMgMjEuNjI1QzIwLjQ2MzIgMjEuODE0NSAyMC4wNzA3IDIxLjkzNjQgMTkuNTcgMjIuMDMxMkMxOS41NTY0IDIyLjAzMTIgMTkuNTI5NCAyMi4wMzEyIDE5LjUxNTggMjIuMDQ0N0wxOS40MjExIDIyLjA1ODNMMTkuNDM0NiAyMS45NzdaTTAuMTA4MzA3IDYuODExMTVWMTguNjU5NUMwLjA5NDc3MzIgMjQuMTQzNiA0LjU2MDk0IDI4LjYyNTYgMTAuMDgyNyAyOC42MzkySDEwLjEwOThDMTEuODU1NyAyOC42MzkyIDEzLjU4OCAyOC4xNzg4IDE1LjA5MDMgMjcuMzEyMkwyMi4zODUgMjMuMTQxNkMyNS40MDMgMjEuNTg0MyAyNy4yOTc4IDE4LjUxMDUgMjcuMjk3OCAxNS4xMjUzVjIuNzQ4ODZDMjcuMjk3OCAyLjcwODI0IDI3LjI4NDIgMi42ODExNiAyNy4yNDM2IDIuNjY3NjJMMjUuNDU3MiAxLjYyNDk2QzI1LjQzMDEgMS42MTE0MiAyNS4zODk1IDEuNjExNDIgMjUuMzYyNCAxLjYyNDk2TDE4LjA0MDYgNS43NDE0MkMxOC4wMTM2IDUuNzU0OTYgMTcuOTg2NSA1Ljc5NTU4IDE3Ljk4NjUgNS44MjI2NlYxOC43MTM3QzE3Ljk4NjUgMTkuMjU1MyAxNy45MzI0IDE5Ljc5NjkgMTcuODI0MSAyMC4zMjVDMTcuNzE1OCAyMC44Mzk2IDE3LjU1MzQgMjEuMzQwNiAxNy4zNTA0IDIxLjgxNDVDMTcuMzA5OCAyMS45MDkzIDE3LjI2OTIgMjEuOTkwNiAxNy4yMjg2IDIyLjA4NTRMMTcuMjE1MSAyMi4xMjZIMTcuMTc0NUMxNy4wNTI3IDIyLjExMjQgMTYuOTcxNSAyMi4wOTg5IDE2Ljc1NDkgMjIuMDU4M0wxNi43MDA4IDIyLjA0NDdDMTYuMjQwNiAyMS45NDk5IDE1LjMwNjggMjEuNjkyNyAxNC4xOTcgMjAuOTc1QzEzLjgxODEgMjAuNzE3NyAxMy40NjYyIDIwLjQzMzQgMTMuMTQxNCAyMC4xMDg0QzEyLjgxNjYgMTkuNzgzNCAxMi41MzI0IDE5LjQzMTMgMTIuMjc1MiAxOS4wNTIyQzEyLjAxODEgMTguNjczIDExLjgwMTUgMTguMjY2OCAxMS42MjU2IDE3Ljg0N0MxMS40NDk3IDE3LjQyNzMgMTEuMzE0MyAxNi45ODA0IDExLjIxOTYgMTYuNTJDMTEuMTM4NCAxNi4xMTM4IDExLjA5NzggMTUuNjk0IDExLjExMTMgMTUuMTExOFYyLjc0ODg2QzExLjExMTMgMi43MDgyNCAxMS4wOTc4IDIuNjgxMTYgMTEuMDU3MiAyLjY2NzYyTDkuMjcwNzEgMS41ODQzNEM5LjI1NzE4IDEuNTcwOCA5LjIzMDExIDEuNTcwOCA5LjIxNjU4IDEuNTcwOEM5LjIwMzA0IDEuNTcwOCA5LjE3NTk4IDEuNTcwOCA5LjE2MjQ0IDEuNTg0MzRMMC4xNDg5MDkgNi43Mjk5MUMwLjEyMTg0MSA2Ljc0MzQ1IDAuMTA4MzA3IDYuNzg0MDcgMC4xMDgzMDcgNi44MTExNVoiIGZpbGw9IiMyMDE1RkYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00OS45NjY5IDE2LjU4NzdDNDkuOTY2OSAxOC42NzMgNDguMTgwNSAyMC4yOTc5IDQ1LjkwNjggMjAuMjk3OUM0My42MzMxIDIwLjI5NzkgNDEuOTAwOCAxOC43MDAxIDQxLjkwMDggMTYuNTg3N1Y4LjIxOTM1SDM5Ljg0MzZWMTYuNjE0N0MzOS44NDM2IDE5Ljg1MSA0Mi4zODggMjIuMTkzNiA0NS45MDY4IDIyLjE5MzZDNDkuNDI1NiAyMi4xOTM2IDUyLjAyNDEgMTkuODUxIDUyLjAyNDEgMTYuNjE0N1Y4LjIwNTgxSDQ5Ljk2NjlWMTYuNTg3N1oiIGZpbGw9IiMwQjBCMEIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02Ny42NDIyIDE1LjExMTdDNjcuNjQyMiAxOC4yNjY3IDY1Ljc3NDUgMjAuMTQ4OSA2Mi42NDgyIDIwLjE0ODlMNjAuMjM5MiAyMC4xMzU0VjEwLjA4OEg2Mi42NDgyQzY1Ljc3NDUgMTAuMDg4IDY3LjY0MjIgMTEuOTU2NyA2Ny42NDIyIDE1LjExMTdaTTYyLjc3IDguMjE5MzVMNTguMjA5MSA4LjIwNTgxSDU4LjE4MlYyMi4wMTc2SDYyLjc1NjRDNjYuOTY1NSAyMi4wMTc2IDY5LjY5OTMgMTkuMzA5NCA2OS42OTkzIDE1LjExMTdDNjkuNjcyMiAxMC45Mjc1IDY2Ljk2NTUgOC4yMTkzNSA2Mi43NyA4LjIxOTM1WiIgZmlsbD0iIzBCMEIwQiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0MS42MDUgOC4yMDU4MUwxMzcuNTg1IDE0LjAwMTNMMTMzLjUzOCA4LjIxOTM1TDEzMy41MjUgOC4yMDU4MUgxMzEuMjExTDEzNi41NTYgMTYuMTI3M1YyMi4wMTc2SDEzOC42MTRWMTYuMTQwOEwxNDMuODY1IDguMjU5OTdMMTQzLjg5MiA4LjIwNTgxSDE0MS42MDVaIiBmaWxsPSIjMEIwQjBCIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTE2LjI0MiAxMC4wODhIMTIwLjk2NVYyMi4wMTc2SDEyMy4wMjNWMTAuMDg4SDEyNy43NDZWOC4yMDU4MUgxMTYuMjQyVjEwLjA4OFoiIGZpbGw9IiMwQjBCMEIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMDguNzMxIDIyLjAxNzZIMTEwLjc4OFY4LjIwNTgxSDEwOC43MzFWMjIuMDE3NloiIGZpbGw9IiMwQjBCMEIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMDEuMTI1IDE4LjY3M0MxMDEuMTExIDE4LjY4NjUgOTkuNTgyIDIwLjI5NzkgOTcuMTQ1OSAyMC4yOTc5Qzk0LjMxNzMgMjAuMjk3OSA5Mi4xNzkgMTguMDIzIDkyLjE3OSAxNS4wMDM0QzkyLjE3OSAxMS45ODM3IDk0LjMwMzggOS45MTE5NiA5Ny4xMDUzIDkuOTExOTZDOTkuMzc5IDkuOTExOTYgMTAwLjgyNyAxMS4yMzkgMTAwLjg0MSAxMS4yNTI1TDEwMS4xMzggMTEuNTIzM0wxMDIuMjM1IDEwLjAyMDNMMTAyLjAzMiA5LjgwMzYzQzEwMS45NjQgOS43MzU5MyAxMDAuMzEzIDguMDAyNjkgOTcuMDc4MiA4LjAwMjY5QzkzLjExMjggOC4wNDMzMSA5MC4xMzU0IDExLjA0OTQgOTAuMTM1NCAxNS4wMzA0QzkwLjEzNTQgMTkuMDExNSA5My4xMzk5IDIyLjE5MzYgOTcuMTMyNCAyMi4xOTM2QzEwMC40NzUgMjIuMTkzNiAxMDIuMzE2IDIwLjEzNTQgMTAyLjM5NyAyMC4wNTQxTDEwMi42IDE5LjgzNzVMMTAxLjQwOSAxOC4zODg2TDEwMS4xMjUgMTguNjczWiIgZmlsbD0iIzBCMEIwQiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTgxLjczMDggMTUuODdMNzcuNjQzNiAxNi42OTZMNzkuODQ5NiAxMS4yNzk2TDgxLjczMDggMTUuODdaTTgwLjc5NjkgOC4yMTkzNkg3OC45MTU3TDczLjI5OTIgMjIuMDE3Nkg3NS40NjQ2TDc2LjcwOTcgMTguOTcwOUw4Mi41MDIyIDE3Ljc5MjhMODQuMjIxIDIyLjAwNDFMODQuMjM0NSAyMi4wMzExSDg2LjRMODAuNzk2OSA4LjIzMjlWOC4yMTkzNloiIGZpbGw9IiMwQjBCMEIiLz4KPHBhdGggZD0iTTczLjEzNjggMjkuNTU5OUg3NS4wNDUxQzc1LjM4MzUgMjkuNTU5OSA3NS42ODEyIDI5LjYwMDYgNzUuOTUxOSAyOS42NjgzQzc2LjIyMjYgMjkuNzQ5NSA3Ni40NTI2IDI5Ljg1NzggNzYuNjQyMSAzMC4wMDY4Qzc2LjgzMTYgMzAuMTU1NyA3Ni45ODA0IDMwLjM0NTMgNzcuMDg4NyAzMC41NzU1Qzc3LjE5NyAzMC44MDU3IDc3LjI1MTEgMzEuMDc2NSA3Ny4yNTExIDMxLjM4OFYzMS40MTVDNzcuMjUxMSAzMS43MjY1IDc3LjE5NyAzMS45OTczIDc3LjA4ODcgMzIuMjI3NUM3Ni45ODA0IDMyLjQ1NzcgNzYuODMxNiAzMi42MzM3IDc2LjY0MjEgMzIuNzgyN0M3Ni40NTI2IDMyLjkzMTYgNzYuMjIyNiAzMy4wNCA3NS45NTE5IDMzLjEwNzdDNzUuNjgxMiAzMy4xNzU0IDc1LjM5NyAzMy4yMTYgNzUuMDcyMiAzMy4yMTZINzQuMjQ2NlYzNS40NzczSDczLjEzNjhWMjkuNTU5OVpNNzUuMDQ1MSAzMi40MzA2Qzc1LjQxMDUgMzIuNDMwNiA3NS42OTQ3IDMyLjM0OTQgNzUuODg0MiAzMi4xNzMzQzc2LjA3MzcgMzEuOTk3MyA3Ni4xNjg0IDMxLjc1MzYgNzYuMTY4NCAzMS40MTVWMzEuMzg4Qzc2LjE2ODQgMzEuMDM1OSA3Ni4wNzM3IDMwLjc3ODYgNzUuODcwNyAzMC42Mjk3Qzc1LjY2NzcgMzAuNDgwNyA3NS4zOTcgMzAuMzk5NSA3NS4wNDUxIDMwLjM5OTVINzQuMjQ2NlYzMi40MzA2SDc1LjA0NTFaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNzkuMjAwMSAzNS41NzIxQzc4Ljk5NyAzNS41NzIxIDc4LjgwNzYgMzUuNTQ1IDc4LjYzMTYgMzUuNDkwOUM3OC40NTU3IDM1LjQzNjcgNzguMzA2OCAzNS4zNjkgNzguMTcxNSAzNS4yNjA3Qzc4LjAzNjEgMzUuMTUyMyA3Ny45NDE0IDM1LjAzMDUgNzcuODYwMiAzNC44NjhDNzcuNzc5IDM0LjcwNTUgNzcuNzM4NCAzNC41MTU5IDc3LjczODQgMzQuMjg1N0M3Ny43Mzg0IDM0LjAyODQgNzcuNzkyNSAzMy44MTE4IDc3LjkxNDMgMzMuNjM1OEM3OC4wMzYxIDMzLjQ1OTcgNzguMTg1IDMzLjMyNDMgNzguMzg4IDMzLjIxNkM3OC41OTEgMzMuMTA3NyA3OC44MjExIDMzLjAyNjQgNzkuMDkxOCAzMi45ODU4Qzc5LjM2MjUgMzIuOTMxNiA3OS42NDY3IDMyLjkwNDUgNzkuOTU3OSAzMi45MDQ1SDgwLjQ5OTNWMzIuNjc0NEM4MC40OTkzIDMyLjM3NjUgODAuNDQ1MiAzMi4xNTk4IDgwLjMyMzQgMzIuMDEwOEM4MC4yMTUxIDMxLjg2MTkgNzkuOTk4NiAzMS43OTQyIDc5LjcwMDggMzEuNzk0MkM3OS40MzAxIDMxLjc5NDIgNzkuMjQwNyAzMS44NDg0IDc5LjEwNTMgMzEuOTcwMkM3OC45NyAzMi4wOTIxIDc4LjkwMjMgMzIuMjU0NiA3OC44NzUyIDMyLjQ4NDhINzcuOTAwOEM3Ny45Mjc5IDMyLjIyNzUgNzcuOTgyIDMyLjAxMDggNzguMDkwMyAzMS44MzQ4Qzc4LjE5ODYgMzEuNjU4OCA3OC4zMzM5IDMxLjUwOTggNzguNDk2MyAzMS4zODhDNzguNjU4NyAzMS4yNjYxIDc4Ljg0ODIgMzEuMTg0OCA3OS4wNjQ3IDMxLjEzMDdDNzkuMjgxMyAzMS4wNzY1IDc5LjUxMTMgMzEuMDQ5NCA3OS43NTQ5IDMxLjA0OTRDNzkuOTk4NSAzMS4wNDk0IDgwLjIyODYgMzEuMDc2NSA4MC40MzE2IDMxLjEzMDdDODAuNjQ4MiAzMS4xODQ4IDgwLjgyNDEgMzEuMjY2MSA4MC45ODY1IDMxLjQwMTVDODEuMTQ4OSAzMS41MjM0IDgxLjI3MDcgMzEuNjg1OSA4MS4zNTE5IDMxLjg4OUM4MS40NDY3IDMyLjA5MjEgODEuNDg3MyAzMi4zMzU4IDgxLjQ4NzMgMzIuNjMzN1YzNS40NzczSDgwLjQ5OTNWMzQuOTQ5MkM4MC4zNTA0IDM1LjEzODggODAuMTc0NSAzNS4yODc4IDc5Ljk3MTUgMzUuMzk2MUM3OS43OTU1IDM1LjUxOCA3OS41MjQ5IDM1LjU3MjEgNzkuMjAwMSAzNS41NzIxWk03OS40MzAxIDM0Ljg1NDRDNzkuNzQxNCAzNC44NTQ0IDc5Ljk5ODUgMzQuNzczMiA4MC4yMDE2IDM0LjYyNDNDODAuNDA0NiAzNC40NzUzIDgwLjQ5OTMgMzQuMjU4NiA4MC40OTkzIDMzLjk3NDNWMzMuNTQxSDc5Ljk4NUM3OS42MDYxIDMzLjU0MSA3OS4yOTQ4IDMzLjU5NTEgNzkuMDc4MiAzMy42ODk5Qzc4Ljg0ODIgMzMuNzk4MyA3OC43Mzk5IDMzLjk3NDMgNzguNzM5OSAzNC4yNDUxQzc4LjczOTkgMzQuNDIxMSA3OC43OTQgMzQuNTcwMSA3OC45MDIzIDM0LjY3ODRDNzkuMDEwNiAzNC44MDAzIDc5LjE4NjUgMzQuODU0NCA3OS40MzAxIDM0Ljg1NDRaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNODIuNjkxOCAzMS4xNDQySDgzLjY5MzNWMzEuOTU2N0M4My44Mjg2IDMxLjY4NTkgODQuMDA0NiAzMS40NjkyIDg0LjIzNDYgMzEuMzA2N0M4NC40NTEyIDMxLjE1NzggODQuNzQ4OSAzMS4wNzY1IDg1LjExNDMgMzEuMDc2NVYzMi4wMTA5Qzg0Ljg5NzggMzIuMDEwOSA4NC42OTQ4IDMyLjAzNzkgODQuNTE4OCAzMi4wNzg2Qzg0LjM0MjkgMzIuMTE5MiA4NC4xOTQgMzIuMTg2OSA4NC4wNzIyIDMyLjI4MTdDODMuOTUwNCAzMi4zNzY1IDgzLjg1NTcgMzIuNDk4MyA4My43ODggMzIuNjQ3M0M4My43MjAzIDMyLjc5NjIgODMuNjkzMyAzMi45ODU4IDgzLjY5MzMgMzMuMjI5NlYzNS40OTA5SDgyLjY5MThWMzEuMTQ0MloiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik04Ny41MzY4IDM1LjU3MjFDODcuMTAzNyAzNS41NzIxIDg2Ljc3ODkgMzUuNDYzNyA4Ni41NjI0IDM1LjIzMzVDODYuMzQ1OCAzNS4wMTY5IDg2LjIyNCAzNC42OTE5IDg2LjIyNCAzNC4yNzIxVjMxLjkwMjVIODUuNjQyMVYzMS4xNTc3SDg2LjIyNFYzMC4yMDk4SDg3LjIyNTZWMzEuMTU3N0g4OC4xNzI5VjMxLjkwMjVIODcuMjI1NlYzNC4xOTA5Qzg3LjIyNTYgMzQuMzgwNSA4Ny4yNjYyIDM0LjUyOTQgODcuMzQ3NCAzNC42MTA3Qzg3LjQyODYgMzQuNzA1NCA4Ny41NTA0IDM0Ljc0NjEgODcuNzEyOCAzNC43NDYxQzg3LjkwMjIgMzQuNzQ2MSA4OC4wNjQ2IDM0LjcxOSA4OC4yIDM0LjY2NDhWMzUuNDYzN0M4OC4xMTg4IDM1LjQ5MDggODguMDI0IDM1LjUxNzkgODcuOTE1OCAzNS41NDVDODcuODIxIDM1LjU1ODUgODcuNjk5MiAzNS41NzIxIDg3LjUzNjggMzUuNTcyMVoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik05My4wOTkyIDM1LjU3MjFDOTIuNzc0NCAzNS41NzIxIDkyLjQ3NjYgMzUuNTE4IDkyLjIwNiAzNS40MDk2QzkxLjkzNTMgMzUuMzAxMyA5MS43MDUyIDM1LjE1MjQgOTEuNTAyMiAzNC45NjI4QzkxLjI5OTIgMzQuNzczMiA5MS4xNTAzIDM0LjU0MyA5MS4wNDIgMzQuMjcyMkM5MC45MzM4IDM0LjAwMTQgOTAuODc5NiAzMy43MDM1IDkwLjg3OTYgMzMuMzY0OVYzMy4yOTcyQzkwLjg3OTYgMzIuOTU4NyA5MC45MzM4IDMyLjY0NzMgOTEuMDU1NiAzMi4zNzY1QzkxLjE2MzggMzIuMTA1NiA5MS4zMjYzIDMxLjg2MTkgOTEuNTI5MyAzMS42NzIzQzkxLjczMjMgMzEuNDY5MiA5MS45NjIzIDMxLjMyMDMgOTIuMjMzIDMxLjIxMTlDOTIuNTAzNyAzMS4xMDM2IDkyLjgwMTQgMzEuMDQ5NCA5My4xMjYzIDMxLjA0OTRDOTMuNDUxMSAzMS4wNDk0IDkzLjczNTMgMzEuMTAzNiA5NC4wMDYgMzEuMjExOUM5NC4yNzY2IDMxLjMyMDMgOTQuNTA2NyAzMS40NjkyIDk0LjcwOTcgMzEuNjU4OEM5NC45MTI3IDMxLjg2MTkgOTUuMDYxNiAzMi4wOTIxIDk1LjE4MzQgMzIuMzYyOUM5NS4yOTE3IDMyLjYzMzcgOTUuMzU5MyAzMi45MzE2IDk1LjM1OTMgMzMuMjcwMlYzMy4zMzc5Qzk1LjM1OTMgMzMuNjc2NCA5NS4zMDUyIDMzLjk4NzggOTUuMTgzNCAzNC4yNTg2Qzk1LjA3NTEgMzQuNTI5NSA5NC45MTI3IDM0Ljc3MzIgOTQuNzA5NyAzNC45NjI4Qzk0LjUwNjcgMzUuMTY1OSA5NC4yNzY2IDM1LjMxNDggOTQuMDA2IDM1LjQwOTZDOTMuNzA4MiAzNS41MTggOTMuNDI0IDM1LjU3MjEgOTMuMDk5MiAzNS41NzIxWk05My4wOTkyIDM0Ljc4NjdDOTMuNDc4MSAzNC43ODY3IDkzLjc2MjMgMzQuNjY0OSA5My45Nzg5IDM0LjQwNzZDOTQuMTk1NCAzNC4xNTAzIDk0LjI5MDIgMzMuNzk4MyA5NC4yOTAyIDMzLjM1MTRWMzMuMjk3MkM5NC4yOTAyIDMyLjg1MDQgOTQuMTgxOSAzMi40OTgzIDkzLjk3ODkgMzIuMjQxQzkzLjc3NTkgMzEuOTgzOCA5My40NzgxIDMxLjg2MTkgOTMuMDk5MiAzMS44NjE5QzkyLjcyMDIgMzEuODYxOSA5Mi40MjI1IDMxLjk4MzggOTIuMjE5NSAzMi4yNDFDOTIuMDAzIDMyLjQ5ODMgOTEuODk0NyAzMi44NTA0IDkxLjg5NDcgMzMuMjk3MlYzMy4zNjQ5QzkxLjg5NDcgMzMuODExOCA5Mi4wMDI5IDM0LjE2MzkgOTIuMjA2IDM0LjQyMTFDOTIuNDIyNSAzNC42NTEzIDkyLjcyMDIgMzQuNzg2NyA5My4wOTkyIDM0Ljc4NjdaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNOTYuNDQyMiAzMS45MDI1SDk1Ljg0NjdWMzEuMTU3N0g5Ni40NDIyVjMwLjU3NTVDOTYuNDQyMiAzMC4wODggOTYuNTY0IDI5LjcyMjQgOTYuODIxMSAyOS40Nzg2Qzk3LjA3ODMgMjkuMjM0OSA5Ny40MzAxIDI5LjA5OTUgOTcuOTAzOCAyOS4wOTk1Qzk4LjAyNTYgMjkuMDk5NSA5OC4xMzM5IDI5LjExMyA5OC4yMTUxIDI5LjEyNjZDOTguMjk2MyAyOS4xNDAxIDk4LjM5MSAyOS4xNjcyIDk4LjQ4NTggMjkuMTk0M1YyOS45Nzk2Qzk4LjQxODEgMjkuOTUyNiA5OC4zNTA0IDI5LjkzOSA5OC4yODI4IDI5LjkyNTVDOTguMjAxNiAyOS45MTE5IDk4LjEyMDQgMjkuODk4NCA5OC4wMjU2IDI5Ljg5ODRDOTcuODIyNiAyOS44OTg0IDk3LjY3MzcgMjkuOTUyNiA5Ny41OTI1IDMwLjA3NDRDOTcuNDk3OCAzMC4xOTYzIDk3LjQ1NzIgMzAuMzQ1MyA5Ny40NTcyIDMwLjUzNDhWMzEuMTU3N0g5OC40NDUyVjMxLjkwMjVIOTcuNDU3MlYzNS40OTA4SDk2LjQ1NTdWMzEuOTAyNUg5Ni40NDIyWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTEwMi43NDkgMjkuNTU5OUgxMDQuOTQxTDEwNi44MjMgMzUuNDkwOUgxMDUuMDIzTDEwNC43MTEgMzQuMzgwNUgxMDIuNzQ5TDEwMi40MzggMzUuNDkwOUgxMDAuODU0TDEwMi43NDkgMjkuNTU5OVpNMTAzLjA4NyAzMy4yMTZIMTA0LjM4NkwxMDMuNzM3IDMwLjkyNzZMMTAzLjA4NyAzMy4yMTZaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMTA5LjMyNiAzNS41ODU3QzEwOS4wMDEgMzUuNTg1NyAxMDguNzA0IDM1LjU0NSAxMDguNDIgMzUuNDUwMkMxMDguMTQ5IDM1LjM1NTUgMTA3LjkwNSAzNS4yMiAxMDcuNzAyIDM1LjAzMDVDMTA3LjQ5OSAzNC44NTQ0IDEwNy4zMzcgMzQuNjI0MiAxMDcuMjE1IDM0LjMzOTlDMTA3LjA5MyAzNC4wNjkxIDEwNy4wMzkgMzMuNzQ0MSAxMDcuMDM5IDMzLjM3ODVWMzMuMzEwOEMxMDcuMDM5IDMyLjk0NTIgMTA3LjA5MyAzMi42MzM3IDEwNy4yMTUgMzIuMzQ5NEMxMDcuMzM3IDMyLjA2NSAxMDcuNDk5IDMxLjgzNDggMTA3LjcxNiAzMS42MzE3QzEwNy45MzIgMzEuNDQyMSAxMDguMTc2IDMxLjI5MzIgMTA4LjQ0NyAzMS4xODQ4QzEwOC43MzEgMzEuMDc2NSAxMDkuMDI5IDMxLjAzNTkgMTA5LjM1MyAzMS4wMzU5QzEwOS42MjQgMzEuMDM1OSAxMDkuODgxIDMxLjA2MyAxMTAuMTI1IDMxLjEzMDdDMTEwLjM2OCAzMS4xOTg0IDExMC41ODUgMzEuMjkzMiAxMTAuNzg4IDMxLjQyODZDMTEwLjk3NyAzMS41Nzc1IDExMS4xNCAzMS43NTM2IDExMS4yNjIgMzEuOTgzOEMxMTEuMzgzIDMyLjIxNCAxMTEuNDY1IDMyLjQ4NDggMTExLjQ3OCAzMi44MjMzSDExMC4wODRDMTEwLjA1NyAzMi42MjAyIDEwOS45NzYgMzIuNDU3NyAxMDkuODY4IDMyLjM0OTRDMTA5Ljc1OSAzMi4yNDEgMTA5LjU5NyAzMi4xODY5IDEwOS4zOCAzMi4xODY5QzEwOS4xMSAzMi4xODY5IDEwOC45MDcgMzIuMjgxNyAxMDguNzcxIDMyLjQ3MTJDMTA4LjYyMyAzMi42NjA4IDEwOC41NTUgMzIuOTMxNiAxMDguNTU1IDMzLjI5NzJWMzMuMzY0OUMxMDguNTU1IDMzLjc0NDEgMTA4LjYyMyAzNC4wMjg0IDEwOC43NzEgMzQuMjE4QzEwOC45MiAzNC40MDc2IDEwOS4xMjMgMzQuNTAyNCAxMDkuNDA3IDM0LjUwMjRDMTA5LjYyNCAzNC41MDI0IDEwOS43ODYgMzQuNDM0NyAxMDkuOTIyIDM0LjMyNjNDMTEwLjA1NyAzNC4yMTggMTEwLjEzOCAzNC4wMjg0IDExMC4xNjUgMzMuNzg0N0gxMTEuNTA1QzExMS40NzggMzQuMzI2MyAxMTEuMjg5IDM0Ljc3MzIgMTEwLjkyMyAzNS4wOTgyQzExMC41NzEgMzUuNDIzMiAxMTAuMDMgMzUuNTg1NyAxMDkuMzI2IDM1LjU4NTdaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMTE0LjIzOSAzNS41ODU3QzExMy45MTQgMzUuNTg1NyAxMTMuNjE3IDM1LjU0NSAxMTMuMzMyIDM1LjQ1MDJDMTEzLjA2MiAzNS4zNTU1IDExMi44MTggMzUuMjIgMTEyLjYxNSAzNS4wMzA1QzExMi40MTIgMzQuODU0NCAxMTIuMjUgMzQuNjI0MiAxMTIuMTI4IDM0LjMzOTlDMTEyLjAwNiAzNC4wNjkxIDExMS45NTIgMzMuNzQ0MSAxMTEuOTUyIDMzLjM3ODVWMzMuMzEwOEMxMTEuOTUyIDMyLjk0NTIgMTEyLjAwNiAzMi42MzM3IDExMi4xMjggMzIuMzQ5NEMxMTIuMjUgMzIuMDY1IDExMi40MTIgMzEuODM0OCAxMTIuNjI5IDMxLjYzMTdDMTEyLjg0NSAzMS40NDIxIDExMy4wODkgMzEuMjkzMiAxMTMuMzU5IDMxLjE4NDhDMTEzLjY0NCAzMS4wNzY1IDExMy45NDEgMzEuMDM1OSAxMTQuMjY2IDMxLjAzNTlDMTE0LjUzNyAzMS4wMzU5IDExNC43OTQgMzEuMDYzIDExNS4wMzggMzEuMTMwN0MxMTUuMjgxIDMxLjE5ODQgMTE1LjQ5OCAzMS4yOTMyIDExNS43MDEgMzEuNDI4NkMxMTUuODkgMzEuNTc3NSAxMTYuMDUzIDMxLjc1MzYgMTE2LjE3NCAzMS45ODM4QzExNi4yOTYgMzIuMjE0IDExNi4zNzcgMzIuNDg0OCAxMTYuMzkxIDMyLjgyMzNIMTE0Ljk5N0MxMTQuOTcgMzIuNjIwMiAxMTQuODg5IDMyLjQ1NzcgMTE0Ljc4IDMyLjM0OTRDMTE0LjY3MiAzMi4yNDEgMTE0LjUxIDMyLjE4NjkgMTE0LjI5MyAzMi4xODY5QzExNC4wMjMgMzIuMTg2OSAxMTMuODIgMzIuMjgxNyAxMTMuNjg0IDMyLjQ3MTJDMTEzLjUzNSAzMi42NjA4IDExMy40NjggMzIuOTMxNiAxMTMuNDY4IDMzLjI5NzJWMzMuMzY0OUMxMTMuNDY4IDMzLjc0NDEgMTEzLjUzNSAzNC4wMjg0IDExMy42ODQgMzQuMjE4QzExMy44MzMgMzQuNDA3NiAxMTQuMDM2IDM0LjUwMjQgMTE0LjMyIDM0LjUwMjRDMTE0LjUzNyAzNC41MDI0IDExNC42OTkgMzQuNDM0NyAxMTQuODM1IDM0LjMyNjNDMTE0Ljk3IDM0LjIxOCAxMTUuMDUxIDM0LjAyODQgMTE1LjA3OCAzMy43ODQ3SDExNi40MThDMTE2LjM5MSAzNC4zMjYzIDExNi4yMDIgMzQuNzczMiAxMTUuODM2IDM1LjA5ODJDMTE1LjQ3MSAzNS40MjMyIDExNC45NDMgMzUuNTg1NyAxMTQuMjM5IDM1LjU4NTdaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMTE5LjIwNiAzNS41ODU2QzExOC44NjggMzUuNTg1NiAxMTguNTQzIDM1LjUzMTUgMTE4LjI1OSAzNS40MzY3QzExNy45NzQgMzUuMzQxOSAxMTcuNzMxIDM1LjE5MjkgMTE3LjUxNCAzNS4wMDM0QzExNy4yOTggMzQuODEzOCAxMTcuMTM1IDM0LjU4MzYgMTE3LjAyNyAzNC4zMTI4QzExNi45MDUgMzQuMDQyIDExNi44NTEgMzMuNzE3IDExNi44NTEgMzMuMzY0OVYzMy4yOTcyQzExNi44NTEgMzIuOTQ1MSAxMTYuOTA1IDMyLjYzMzcgMTE3LjAyNyAzMi4zNDkzQzExNy4xNDkgMzIuMDY1IDExNy4zMTEgMzEuODM0OCAxMTcuNTI4IDMxLjYzMTdDMTE3Ljc0NCAzMS40Mjg2IDExNy45ODggMzEuMjc5NiAxMTguMjcyIDMxLjE3MTNDMTE4LjU1NiAzMS4wNjMgMTE4Ljg2OCAzMS4wMDg4IDExOS4xOTIgMzEuMDA4OEMxMTkuNDkgMzEuMDA4OCAxMTkuNzc0IDMxLjA0OTQgMTIwLjA0NSAzMS4xNDQyQzEyMC4zMTYgMzEuMjM5IDEyMC41NDYgMzEuMzc0NCAxMjAuNzQ5IDMxLjU1MDRDMTIwLjk1MiAzMS43MjY1IDEyMS4xMDEgMzEuOTcwMiAxMjEuMjIzIDMyLjI0MUMxMjEuMzQ0IDMyLjUyNTQgMTIxLjM5OCAzMi44NjM5IDEyMS4zOTggMzMuMjQzVjMzLjYzNTdIMTE4LjM0QzExOC4zNjcgMzMuOTIwMSAxMTguNDQ4IDM0LjE1MDMgMTE4LjYxIDM0LjI5OTJDMTE4Ljc3MyAzNC40NjE3IDExOC45NzYgMzQuNTI5NCAxMTkuMjQ3IDM0LjUyOTRDMTE5LjQ5IDM0LjUyOTQgMTE5LjY4IDM0LjQ3NTMgMTE5Ljc4OCAzNC4zODA1QzExOS44OTYgMzQuMjg1NyAxMTkuOTc3IDM0LjE2MzggMTIwLjAwNCAzNC4wMTQ5SDEyMS4zOThDMTIxLjMzMSAzNC41MDI0IDEyMS4xMTQgMzQuODgxNSAxMjAuNzQ5IDM1LjE1MjNDMTIwLjM4MyAzNS40NjM4IDExOS44NjkgMzUuNTg1NiAxMTkuMjA2IDM1LjU4NTZaTTExOS45NjQgMzIuODIzM0MxMTkuOTUgMzIuNTUyNSAxMTkuODgzIDMyLjM0OTMgMTE5Ljc2MSAzMi4yMTM5QzExOS42MzkgMzIuMDc4NSAxMTkuNDUgMzIuMDEwOCAxMTkuMjA2IDMyLjAxMDhDMTE4Ljk3NiAzMi4wMTA4IDExOC44IDMyLjA3ODUgMTE4LjY1MSAzMi4yMTM5QzExOC41MDIgMzIuMzQ5MyAxMTguNDIxIDMyLjU1MjUgMTE4LjM4IDMyLjgyMzNIMTE5Ljk2NFoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xMjIuMTE2IDMxLjE0NDJIMTIzLjYwNVYzMS44NDgzQzEyMy43MjYgMzEuNjE4MSAxMjMuOTAyIDMxLjQyODYgMTI0LjEzMiAzMS4yNjYxQzEyNC4zNjIgMzEuMTAzNiAxMjQuNjc0IDMxLjAyMjMgMTI1LjAzOSAzMS4wMjIzQzEyNS40NTkgMzEuMDIyMyAxMjUuNzk3IDMxLjE1NzcgMTI2LjA2OCAzMS40Mjg2QzEyNi4zMjUgMzEuNjk5NCAxMjYuNDYgMzIuMTA1NiAxMjYuNDYgMzIuNjYwOFYzNS40NzczSDEyNC45NzFWMzIuOTU4N0MxMjQuOTcxIDMyLjcxNSAxMjQuOTE3IDMyLjUyNTQgMTI0LjgyMyAzMi40MDM1QzEyNC43MjggMzIuMjgxNiAxMjQuNTY1IDMyLjIyNzUgMTI0LjM0OSAzMi4yMjc1QzEyNC4xMzIgMzIuMjI3NSAxMjMuOTQzIDMyLjI5NTIgMTIzLjgwOCAzMi40MzA2QzEyMy42NzIgMzIuNTY2IDEyMy42MDUgMzIuNzY5MSAxMjMuNjA1IDMzLjA1MzVWMzUuNDc3M0gxMjIuMTE2VjMxLjE0NDJaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMTI5LjA4NiAzNS41ODU2QzEyOC41OTggMzUuNTg1NiAxMjguMjIgMzUuNDYzNyAxMjcuOTQ5IDM1LjIyQzEyNy42OTIgMzQuOTc2MyAxMjcuNTU2IDM0LjU5NzEgMTI3LjU1NiAzNC4wODI2VjMyLjE0NjJIMTI3LjAyOVYzMS4xMzA2SDEyNy41NTZWMzAuMjIzNEgxMjkuMDQ1VjMxLjEzMDZIMTI5Ljg5OFYzMi4xNDYySDEyOS4wNDVWMzMuOTMzNkMxMjkuMDQ1IDM0LjA4MjYgMTI5LjA4NiAzNC4xOTA5IDEyOS4xNTMgMzQuMjcyMUMxMjkuMjM1IDM0LjM1MzQgMTI5LjM0MyAzNC4zOTQgMTI5LjQ3OCAzNC4zOTRDMTI5LjU1OSAzNC4zOTQgMTI5LjY0MSAzNC4zOTQgMTI5LjcwOCAzNC4zODA1QzEyOS43NzYgMzQuMzY2OSAxMjkuODQ0IDM0LjM1MzQgMTI5LjkxMSAzNC4zMjYzVjM1LjQ1MDJDMTI5LjgxNyAzNS40NzczIDEyOS42OTUgMzUuNTA0NCAxMjkuNTU5IDM1LjUzMTRDMTI5LjQyNCAzNS41NzIxIDEyOS4yNjIgMzUuNTg1NiAxMjkuMDg2IDM1LjU4NTZaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMTMyLjA3NyAzNS41ODU3QzEzMS44NiAzNS41ODU3IDEzMS42NzEgMzUuNTU4NiAxMzEuNDk1IDM1LjQ5MDlDMTMxLjMxOSAzNS40MjMyIDEzMS4xNyAzNS4zMjg0IDEzMS4wMzUgMzUuMTkzQzEzMC44OTkgMzUuMDU3NiAxMzAuODA0IDM0Ljg5NTEgMTMwLjcyMyAzNC42OTJDMTMwLjY0MiAzNC40ODg5IDEzMC42MTUgMzQuMjQ1MSAxMzAuNjE1IDMzLjk3NDNWMzEuMTQ0M0gxMzIuMTA0VjMzLjczMDZDMTMyLjEwNCAzMy45NzQzIDEzMi4xNTggMzQuMTUwNCAxMzIuMjUzIDM0LjI3MjJDMTMyLjM2MSAzNC4zOTQxIDEzMi41MSAzNC40NDgzIDEzMi43MTMgMzQuNDQ4M0MxMzIuOTQzIDM0LjQ0ODMgMTMzLjExOSAzNC4zODA2IDEzMy4yNTQgMzQuMjQ1MUMxMzMuMzg5IDM0LjEwOTcgMTMzLjQ1NyAzMy45MDY2IDEzMy40NTcgMzMuNjIyM1YzMS4xMTcySDEzNC45NDZWMzUuNDYzOEgxMzMuNDU3VjM0Ljc4NjhDMTMzLjMzNSAzNS4wMTcgMTMzLjE3MyAzNS4xOTMgMTMyLjk1NiAzNS4zNDJDMTMyLjc0IDM1LjUxOCAxMzIuNDQyIDM1LjU4NTcgMTMyLjA3NyAzNS41ODU3WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTEzNS44OTMgMzEuMTQ0M0gxMzcuMzgyVjMyLjAxMDlDMTM3LjUxNyAzMS42ODU5IDEzNy43MDcgMzEuNDQyMiAxMzcuOTM3IDMxLjMwNjdDMTM4LjE2NyAzMS4xNTc4IDEzOC40NTEgMzEuMDkwMSAxMzguNzg5IDMxLjA5MDFWMzIuNDcxM0MxMzguMzI5IDMyLjQ1NzcgMTM3Ljk5MSAzMi41MjU0IDEzNy43NDcgMzIuNjc0NEMxMzcuNTA0IDMyLjgyMzMgMTM3LjM4MiAzMy4wNjcxIDEzNy4zODIgMzMuNDE5MVYzNS40Nzc0SDEzNS44OTNWMzEuMTQ0M1oiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xNDEuNTkxIDM1LjU4NTZDMTQxLjI1MyAzNS41ODU2IDE0MC45MjggMzUuNTMxNSAxNDAuNjQ0IDM1LjQzNjdDMTQwLjM1OSAzNS4zNDE5IDE0MC4xMTYgMzUuMTkyOSAxMzkuODk5IDM1LjAwMzRDMTM5LjY4MyAzNC44MTM4IDEzOS41MiAzNC41ODM2IDEzOS40MTIgMzQuMzEyOEMxMzkuMjkgMzQuMDQyIDEzOS4yMzYgMzMuNzE3IDEzOS4yMzYgMzMuMzY0OVYzMy4yOTcyQzEzOS4yMzYgMzIuOTQ1MSAxMzkuMjkgMzIuNjMzNyAxMzkuNDEyIDMyLjM0OTNDMTM5LjUzNCAzMi4wNjUgMTM5LjY5NiAzMS44MzQ4IDEzOS45MTMgMzEuNjMxN0MxNDAuMTI5IDMxLjQyODYgMTQwLjM3MyAzMS4yNzk2IDE0MC42NTcgMzEuMTcxM0MxNDAuOTQxIDMxLjA2MyAxNDEuMjUzIDMxLjAwODggMTQxLjU3NyAzMS4wMDg4QzE0MS44NzUgMzEuMDA4OCAxNDIuMTU5IDMxLjA0OTQgMTQyLjQzIDMxLjE0NDJDMTQyLjcwMSAzMS4yMzkgMTQyLjkzMSAzMS4zNzQ0IDE0My4xMzQgMzEuNTUwNEMxNDMuMzM3IDMxLjcyNjUgMTQzLjQ4NiAzMS45NzAyIDE0My42MDggMzIuMjQxQzE0My43MjkgMzIuNTI1NCAxNDMuNzgzIDMyLjg2MzkgMTQzLjc4MyAzMy4yNDNWMzMuNjM1N0gxNDAuNzI1QzE0MC43NTIgMzMuOTIwMSAxNDAuODMzIDM0LjE1MDMgMTQwLjk5NSAzNC4yOTkyQzE0MS4xNTggMzQuNDYxNyAxNDEuMzYxIDM0LjUyOTQgMTQxLjYzMiAzNC41Mjk0QzE0MS44NzUgMzQuNTI5NCAxNDIuMDY1IDM0LjQ3NTMgMTQyLjE3MyAzNC4zODA1QzE0Mi4yODEgMzQuMjg1NyAxNDIuMzYyIDM0LjE2MzggMTQyLjM4OSAzNC4wMTQ5SDE0My43ODNDMTQzLjcxNiAzNC41MDI0IDE0My40OTkgMzQuODgxNSAxNDMuMTM0IDM1LjE1MjNDMTQyLjc1NSAzNS40NjM4IDE0Mi4yNDEgMzUuNTg1NiAxNDEuNTkxIDM1LjU4NTZaTTE0Mi4zMzUgMzIuODIzM0MxNDIuMzIyIDMyLjU1MjUgMTQyLjI1NCAzMi4zNDkzIDE0Mi4xMzIgMzIuMjEzOUMxNDIuMDExIDMyLjA3ODUgMTQxLjgyMSAzMi4wMTA4IDE0MS41NzcgMzIuMDEwOEMxNDEuMzQ3IDMyLjAxMDggMTQxLjE3MSAzMi4wNzg1IDE0MS4wMjMgMzIuMjEzOUMxNDAuODc0IDMyLjM0OTMgMTQwLjc5MiAzMi41NTI1IDE0MC43NTIgMzIuODIzM0gxNDIuMzM1WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==',
            website: 'https://www.udacity.com'
        },
        {
            name: 'egfwd',
            logo: 'https://benaeducation.com/wp-content/uploads/2021/03/Egypt_fwd_logo-1.png',
            website: 'https://www.egfwd.com/'
        }
    ]
};

//function to add smooth scroll on elements
const smoothScroll = (element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault()
        let clickedElement = event.target;
        //solving problem of nested elements inside anchors
        /* when an element nested inside anchor clicked (like the h1 element on the page title which contain Portfolio text) the element it self revoke the event so it initialize
        error of undefined href it can solved by adding the href to the nested element too but that doesn't make sense! */
        if (!clickedElement.getAttribute('href')) {
            clickedElement = event.target.parentElement;
        }
        let id = clickedElement.getAttribute('href').slice(1);
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
    })
}

//adding resume link
for (let i = 0; i < resumeAnchor.length; i++) {
    resumeAnchor[i].setAttribute('href', data.resumeLink)
}

//nav bar content
const navLinks = (() => {
    const navFragment = new DocumentFragment();
    section.forEach((e) => {
        const id = e.id
        const li = document.createElement('li');
        li.innerHTML = `<a id='${id}-link' class='hover-link' href='#${id}'>${id.charAt(0).toUpperCase() + id.slice(1)}</a>`
        navFragment.appendChild(li)
    })
    navUl.appendChild(navFragment)
})()


// certificates section
const certificatesContent = (() => {
    const certificatesFragment = new DocumentFragment();
    data.certificates.forEach((e) => {
        const div = document.createElement('div');
        const p = document.createElement('p');
        //adding content
        p.innerHTML = `${e.name} track on ${e.date} provided by <a target='blank' href='${data.provider[0].website}'>
                        <img id=${data.provider[0].name} src='${data.provider[0].logo}' alt='provider'  height='30'/></a>  and sponsored by 
                        <a target='blank' href='${data.provider[1].website}'><img id=${data.provider[1].name} src='${data.provider[1].logo}' alt='provider'  height='50'/></a> 
                        <a class='btn' target='blank' href=${e.link}><button>Certificate link</button></a>`
        div.appendChild(p)
        certificatesFragment.appendChild(div)
    })
    certificates.appendChild(certificatesFragment)
})()

//skills section
const skillContent = (() => {
    const skillsFragment = new DocumentFragment()
    data.skills.forEach((e) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const span = document.createElement('span');
        const div = document.createElement('div');
        const innerDiv = document.createElement('div');
        //defining the id for every skill
        li.setAttribute('id', e.name)
        //defining the img element attributes
        img.setAttribute('src', e.logo)
        img.setAttribute('width', 25)
        img.setAttribute('height', 25)
        if (e.name.match(/\./g)) {
            img.setAttribute('alt', e.name.split('.').join(''))
            img.setAttribute('id', e.name.split('.').join(''))
        } else {
            img.setAttribute('alt', e.name)
            img.setAttribute('id', e.name)
        }
        //defining the title of skill
        if (e.name === 'html' || e.name === 'css') {
            span.textContent = e.name.toUpperCase()
        } else {
            span.textContent = e.name.charAt(0).toUpperCase() + e.name.slice(1);
        }
        //setting the percent bar
        div.setAttribute('class', 'border');
        innerDiv.setAttribute('class', 'inner');
        innerDiv.setAttribute('id', `inner${e.name}`);
        innerDiv.textContent = e.percent
        innerDiv.style.width = e.percent
        //nesting elements
        //adding innerDiv inside div
        div.appendChild(innerDiv);
        //adding child elements to the parent
        li.appendChild(img)
        li.appendChild(span)
        li.appendChild(div)
        //adding the element to the document fragment
        skillsFragment.appendChild(li)
    })
    skillsList.appendChild(skillsFragment)
})()

//connect section
//email copying button
copyBtn.addEventListener('click', async () => {
    const text = email.value
    await navigator.clipboard.writeText(text)
    copyBtn.classList.add('copied')
    copyBtn.textContent = 'Copied'
})

//scroll action
document.addEventListener('scroll', () => {
    //controlling scroll up button visibility
    if (window.scrollY > 300) {
        upBtn.style.display = 'inline'
    } else {
        upBtn.style.display = 'none'
    }
    // Add class 'active-section' to section when near top of viewport
    section.forEach((e) => {
        const elementPosition = e.getBoundingClientRect()
        //getting the matched nav link
        const linkId = `${e.id}-link`
        const navLink = document.getElementById(linkId);
        if (elementPosition.top <= 450 && elementPosition.bottom >= 450) {
            e.classList.add('active-section')
            navLink.classList.remove('hover-link')
            navLink.classList.add('active-link')
        } else {
            e.classList.remove('active-section')
            navLink.classList.remove('active-link')
            navLink.classList.add('hover-link')
        }
        //adding title attribute to page title when reaching the end of the page
        if (e.id === 'contactMe' && elementPosition.top <= 850 && elementPosition.bottom <= 950) {
            pageTitle.setAttribute('title', 'Click to Scroll Up')
        } else {
            pageTitle.removeAttribute('title', 'Click to Scroll Up')
        }
        //smooth scroll
        smoothScroll(navLink)
    })
})

//adding smooth scroll to scroll up button and page title
smoothScroll(upBtn)
smoothScroll(titleAnchor)

//obligating the first section to be active on page load
section[0].classList.add('active-section')
const firstLinkId = `${section[0].id}-link`
const firstLink = document.getElementById(firstLinkId)
firstLink.classList.add('active-link')
