<template>
    <div class="header">
        <div class="header__navbar-wrapper">
            <div class="header__navbar">
                <div class="header__navbar-left">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDkuMTI0IiBoZWlnaHQ9IjE4Ij48ZyBkYXRhLW5hbWU9Ikdyb3VwIDI4MjkiPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCAyNjkwIiBkPSJNMCAuNjUybDIuMDcyLjAyNkMzLjgxNC42OTkgNS41NjMuNjI3IDcuMjk2Ljc2M2E1LjIgNS4yIDAgMDE0LjggNC4xNjEgNS4yMjIgNS4yMjIgMCAwMS00LjQyMyA2LjQ4NCAyMS42NjIgMjEuNjYyIDAgMDEtMy40MjIuMTE3Yy0uMzkzIDAtLjQ4Ni4xMjQtLjQ4Mi41LjAxOSAxLjcuMDA4IDMuNDA2LjAwOCA1LjEwOXYuNTM0SDB6bTMuODMyIDcuNjY5Yy40NyAwIC45LjAxNyAxLjMxOCAwYTEwLjQ0OSAxMC40NDkgMCAwMDEuNzgxLS4xNTMgMS45NDQgMS45NDQgMCAwMDEuNTI3LTEuOTUgMS45NzQgMS45NzQgMCAwMC0xLjI5My0yLjA0IDEwLjc0OCAxMC43NDggMCAwMC0zLjMzMi0uMjI5eiIgZmlsbD0iIzBkMTEzNiIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCAyNjkxIiBkPSJNMTA5LjEyNCA5LjM2YTQuMjY5IDQuMjY5IDAgMDAtMi4wMTMtLjAxOSAyLjUyMSAyLjUyMSAwIDAwLTEuOSAyLjQzMWMtLjA2OSAxLjc0MS0uMDQ3IDMuNDg1LS4wNjMgNS4yMjd2LjYyN2gtMy41ODFWNS44MDRoMy40NjZ2MS40MjVhMy4yNjYgMy4yNjYgMCAwMTIuMzQ5LTEuNDc3IDEwLjk0NiAxMC45NDYgMCAwMTEuNzQuMDEzeiIgZmlsbD0iIzAwOGQ3MSIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCAyNjkyIiBkPSJNNDguODIzLjY3OGguNTE2YzIuMjM2LjAyIDQuNDc4LS4wNjQgNi43LjA4OWE0LjQxMiA0LjQxMiAwIDAxNC4yODMgMy41ODUgMy44NzYgMy44NzYgMCAwMS0yLjE4MiA0LjQyNS40LjQgMCAwMC0uMDg5LjA2IDExLjAyOCAxMS4wMjggMCAwMTEuNTE1LjkyOSA0LjMzOSA0LjMzOSAwIDAxLjc2NCA1LjQzMSA0Ljc2MSA0Ljc2MSAwIDAxLTQuMTk1IDIuNDI1Yy0yLjM5My4wODQtNC43OTEuMDI3LTcuMTg3LjAzYS41NDYuNTQ2IDAgMDEtLjEzLS4wMzh6bTMuNjYzIDEzLjloMi4xYTcuMDgzIDcuMDgzIDAgMDAuOC0uMDMzIDEuOTMyIDEuOTMyIDAgMDAxLjgxLTEuOCAxLjgxNiAxLjgxNiAwIDAwLTEuNDA2LTJjLTEuMDc4LS4xNjQtMi4xODQtLjE1NS0zLjMwNS0uMjIyem0wLTcuMWMuNzU5IDAgMS40ODguMDE5IDIuMjE2LS4wMDlhMy4xMTkgMy4xMTkgMCAwMC45My0uMTkzIDEuNjUgMS42NSAwIDAwMS4wOTItMS42ODUgMS41NjcgMS41NjcgMCAwMC0xLjIxLTEuNjM0Yy0uOTg3LS4xNi0yLS4xNTktMy4wMjgtLjIyOXoiIGZpbGw9IiMwMDhkNzEiLz48cGF0aCBkYXRhLW5hbWU9IlBhdGggMjY5MyIgZD0iTTM4LjQ1OCA5LjY4NmMuODQ4LS45MzUgMS43NjEtMS44MiAyLjUyNS0yLjgxOWEyLjU0OCAyLjU0OCAwIDAxMi41LTEuMTE0YzEuMDI1LjEgMi4wNjYuMDIxIDMuMjA4LjAyMWwtNC42MzQgNC45ODIgNC43MzQgNi45Yy0xLjMgMC0yLjUxOS0uMDMtMy43MzcuMDE0YTEuMDY5IDEuMDY5IDAgMDEtMS4wOC0uNTc3Yy0uNzY0LTEuMjE0LTEuNTgzLTIuMzkzLTIuNDE2LTMuNjM5LS40LjQzNi0uNzgxLjgzNi0xLjEzOCAxLjI1OC0uMDcxLjA4NC0uMDU4LjI1Mi0uMDU5LjM4MnYyLjUzNmgtMy41NjdWLjM1OGgzLjU1NHY5LjN6IiBmaWxsPSIjMGQxMTM2Ii8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDI2OTQiIGQ9Ik03My40OTMgMTcuNjQ0aC0zLjE5NWwtLjEyNi0xLjE3NGExMi40MyAxMi40MyAwIDAxLTEuMTg1Ljk2OGMtMS40MS45LTQuNDU5Ljg3My01Ljc1Ny0xLjIzNWEzLjQ0NSAzLjQ0NSAwIDAxMi4zMjktNS4yMjhjMS4wNjktLjI1OCAyLjE3MS0uMzg0IDMuMjU3LS41Ny4wOTItLjAxNi4xODMtLjAzMy4yNzUtLjA0N2EuODA5LjgwOSAwIDAwLjc3MS0uNTg3IDEuMDE4IDEuMDE4IDAgMDAtLjI5NS0xLjAyMyAyLjA3MyAyLjA3MyAwIDAwLTIuMDg1LS40MjggMS44MTEgMS44MTEgMCAwMC0xLjMzOCAxLjM0NWMtLjAxNi4wNS0uMDEzLjEwNi0uMDI2LjE1N2ExLjE0MiAxLjE0MiAwIDAxLS4wNjMuMTQzbC0xLjU0Ny0uM2MtLjUxNy0uMS0xLjAxMS0uMjA5LTEuNTQ2LS4zMjFhMy42OSAzLjY5IDAgMDEuODU5LTIuMDc1IDQuNzg5IDQuNzg5IDAgMDEyLjgyMy0xLjY3OCA3LjIzIDcuMjMgMCAwMTQuMTIyLjI2NCAzLjkgMy45IDAgMDEyLjYyOSAzLjc4MWMuMDU5IDEuNjQ4LjAxIDMuMy4wMjQgNC45NS4wMSAxLjAwNy4wNDggMi4wMTYuMDc0IDMuMDU4em0tMy42MS01LjE3NmMtLjQyMy4wNjMtLjgyLjEtMS4yMDcuMTg1YTE0LjY4OCAxNC42ODggMCAwMC0xLjgzNy40NjhjLS40NDkuMTYxLS41NTcuNi0uNTQ4IDEuMDU5YTEuMTMxIDEuMTMxIDAgMDAuNTg1IDEuMDIxIDIuMjM1IDIuMjM1IDAgMDAyLjY1OC0uNzE5IDMuMTc4IDMuMTc4IDAgMDAuMzQ5LTIuMDEzeiIgZmlsbD0iIzAwOGQ3MSIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCAyNjk1IiBkPSJNOTguNTA5IDE3LjYzOWgtMy4ybC0uMTI1LTEuMjI4YS44NjIuODYyIDAgMDAtLjE1NC4xMjljLTEuMzQ1IDEuOTM0LTQuOTE4IDEuODY5LTYuNDE3LjE1OGEzLjQyMyAzLjQyMyAwIDAxMS40NTctNS41NTQgMjkuNzI0IDI5LjcyNCAwIDAxMy4yMzYtLjY1NmMuMjc0LS4wNTMuNTUzLS4wODEuODI2LS4xMzhhLjg4OC44ODggMCAwMC40OS0xLjU2MyAyLjAyNiAyLjAyNiAwIDAwLTIuMDMxLS40ODYgMS44IDEuOCAwIDAwLTEuNDExIDEuMzE2Yy0uMDM0LjEtLjA1LjItLjA4Ni4zNTlsLTMuMTIzLS42MjlhMy45MzEgMy45MzEgMCAwMTEuOTU0LTMuMDM1IDYuNTI3IDYuNTI3IDAgMDE2LjM0My0uMjI0QTMuNjc1IDMuNjc1IDAgMDE5OC40IDkuNDk3Yy4wNjQgMS41ODEuMDIxIDMuMTY3LjAzNyA0Ljc1MS4wMTYgMS4xMTIuMDQ4IDIuMjMuMDcyIDMuMzkxem0tMy41NDUtNS4xODJjLS44LjEyNS0xLjUuMjEzLTIuMTg3LjM0OWEzLjU2MSAzLjU2MSAwIDAwLS45NjYuMzQgMS4wNDcgMS4wNDcgMCAwMC0uNSAxLjA5MiAxLjExNCAxLjExNCAwIDAwLjYzNS45OSAyLjEgMi4xIDAgMDAyLjg1My0xLjMgMTAuNzgyIDEwLjc4MiAwIDAwLjE2NS0xLjQ2OHoiIGZpbGw9IiMwMDhkNzEiLz48cGF0aCBkYXRhLW5hbWU9IlBhdGggMjY5NiIgZD0iTTMyLjM2NyA5LjU0NGwtMy4wNTguOTE4YTcuMDIzIDcuMDIzIDAgMDAtMS4wMDctMS4yMjcgMi42NTMgMi42NTMgMCAwMC00LjE0NyAxLjU3OCA0LjY0OSA0LjY0OSAwIDAwLS4wMDYgMS43NzMgMi41NjEgMi41NjEgMCAwMDIuMjIyIDIuMDUyIDIuNSAyLjUgMCAwMDIuODMtMS40NDRjLjA1My0uMS4yNDMtLjIyNi4zMy0uMi45NjkuMjc2IDEuOTMxLjU3OSAyLjk1Ni44OTRhNy43NzMgNy43NzMgMCAwMS0uMjguNzkyQTUuNTc2IDUuNTc2IDAgMDEyNi45NTQgMThhNi4yODcgNi4yODcgMCAxMS0uMTYzLTEyLjU2OSA1Ljc1MyA1Ljc1MyAwIDAxNC42MzggMi4wODUgNC42MjUgNC42MjUgMCAwMS45MzggMi4wMjh6IiBmaWxsPSIjMGQxMTM2Ii8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDI2OTciIGQ9Ik03NS45NDcgNS43OTJoOS42NzRjLjAwNi4xMjYuMDE4LjI1Mi4wMTguMzc5IDAgLjYzOS0uMDM4IDEuMjgxLjAxMyAxLjkxNmExLjQyNCAxLjQyNCAwIDAxLS40ODMgMS4xODVjLTEuNTcyIDEuNjI3LTMuMTIzIDMuMjc0LTQuNjgxIDQuOTE0LS4wODguMDkzLS4xNjkuMTkyLS4zMDcuMzUxSDg1Ljd2My4xaC05LjljLS4wMS0uMTUtLjAyNi0uMjkxLS4wMjYtLjQzMiAwLS43MzIuMDIyLTEuNDY1LS4wMS0yLjJhMS4yNDEgMS4yNDEgMCAwMS40LS45ODNjMS41MjYtMS42IDMuMDM2LTMuMjA5IDQuNTUxLTQuODE3LjA4LS4wODUuMTU1LS4xNzUuMjc5LS4zMTdoLTUuMDUzeiIgZmlsbD0iIzAwOGQ3MSIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCAyNjk4IiBkPSJNMTQuNDg1IDE3LjYyNlY1LjgwNWgzLjU2N3YxMS44MjF6IiBmaWxsPSIjMGQxMTM2Ii8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDI2OTkiIGQ9Ik0xOC4zODYgMi4xMzhhMi4xIDIuMSAwIDAxLTIuMTQ4IDIuMSAyLjEzOSAyLjEzOSAwIDAxLTIuMDc4LTIuMTRBMi4xNDEgMi4xNDEgMCAwMTE2LjI4Ni4wMDVhMi4wODIgMi4wODIgMCAwMTIuMSAyLjEzM3oiIGZpbGw9IiMwMDhkNzEiLz48L2c+PC9zdmc+" alt="">
                </div>
                <div class="header__navbar-right">
                    <ul class="header__navbar-list">
                        <li class="header__navbar-item">
                            Offer
                        </li>
                        <li class="header__navbar-item">
                            <i class="fa fa-question-circle"></i>
                            Need Help
                        </li>
                        <li class="header__navbar-item background">
                            <svg xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 640 480" width="24px" height="16px"><g fill-rule="evenodd"><g stroke-width="1pt"><path fill="#bd3d44" d="M0 0h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8V197H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8V512H0z" transform="scale(.9375)"></path><path fill="#fff" d="M0 39.4h972.8v39.4H0zm0 78.8h972.8v39.3H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0z" transform="scale(.9375)"></path></g><path fill="#192f5d" d="M0 0h389.1v275.7H0z" transform="scale(.9375)"></path><path fill="#fff" d="M32.4 11.8L36 22.7h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9H177l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 39.4l3.5 10.9h11.5L70.6 57 74 67.9l-9-6.7-9.3 6.7L59 57l-9-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7L124 57l-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5L330 57l3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 66.9L36 78h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7H29zm64.9 0l3.5 11h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zm64.8 0l3.6 11H177l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7h11.5zm64.9 0l3.5 11H242l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 11h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.2-6.7h11.4zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.5zM64.9 94.5l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 122.1L36 133h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9H177l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 149.7l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zM32.4 177.2l3.6 11h11.4l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 11H177l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 11H242l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 11h11.4l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 204.8l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 232.4l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.3-6.7H29zm64.9 0l3.5 10.9h11.5L103 250l3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 10.9H177l-9 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.5z" transform="scale(.9375)"></path></g></svg>
                            English
                        </li>
                        <li class="header__navbar-item">
                            <img class="header__navbar-item--img" src="../../assets/img/backlogin.jpg" alt="">
                        </li>
                    </ul>
                </div>
            </div>
            <div class="header__content">
                <h1 class="header__content-title">Your own books store</h1>
                <span class="header__content-describle">Get your favorite books from our wide range of books.</span>
                <div class="header__content-search">
                    <div class="header__content-input">
                        <input type="text" placeholder="Search your products from here">
                    </div>
                    <div class="header__content-button">
                        <button>Search</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
        }
    },
    methods: {
        getDataCurrent(){
            const user = JSON.parse(localStorage.getItem('user'))
            const userId = user.userId
            axios.get(`http://localhost:8000/api/users/${userId}`)
                .then((res) =>{
                    console.log(res)
                })
                .catch((err) =>{
                    console.log(err);
                    
                })
        }
    },
    computed: {
        
    },
    created() {
        // this.getDataCurrent()
    },
}
</script>

<style>
.header{
    width: 100vw;
    height: 100vh;
    background-image: url('../../assets/img/banner.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
}
.header__navbar-wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    height:80px;
}
.header__navbar{
    width: 1200px;
    height:80px;
    position: fixed;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header__navbar-item{
    display: inline-block;
    font-size: 1.6rem;
    font-weight: bold;
    margin: 0 20px;
    color: #0d1136;
    cursor: pointer;
}
.header__navbar-item:hover{
    color: #009E7F;
}
.header__navbar-item--img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.background.header__navbar-item{
    background-color: #fefefe;
    padding: 8px 15px;
    border: 1px solid rgb(241, 241, 241);
    border-radius: 5px;
    color: #009E7F;
}
.background.header__navbar-item svg{
    margin-bottom: 2px;
    margin-right: 5px;
}
.header__content{
    position: absolute;
    width: 40%;
    height: auto;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
}
.header__content-title{
    font-size: 4.5rem;
    margin-bottom: 15px;
    font-weight: 700;
    color: #0D1136;
}
.header__content-describle{
    display: block;
    font-size: 1.9rem;
    margin-bottom: 60px;
    color: #77798C;
}
.header__content-search{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height:45px;
}
.header__content-input{
    flex: 1;
    height:45px;
}
.header__content-input input {
    width: 100%;
    height:45px;
    border: none;
    background-color: #ffffff;
    font-size: 1.6rem;
    padding: 0 20px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    outline: none;
}
.header__content-button{
    height:45px;
}
.header__content-button button{
    height:45px;
    padding: 0 20px;
    border: none;
    background-color: #009E7F;
    color: white;
    font-weight: bold;
    font-size: 1.6rem;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    outline: none;
}
/*  Responsive */
/* Mobile */
@media (max-width:739px){
    .header__content{
        width: 80%;
    }
    .header__content-title{
        font-size: 3.8rem;
    }
}
/*  Mobile and Tablet */
@media (max-width:1023px){

}
/* Tablet */
@media (max-width:1023px) and (min-width:740px){
    .header__content{
        width: 60%;
    }
}
</style>