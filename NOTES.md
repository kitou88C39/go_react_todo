## Create a Server folder

mkdir server

## initialize Go app

go mod init github.com/tomdoestech/go-react-todo

## Install Riber v2

go get -u github.com/gofiber/fiver/v2

## Create client app with Vite

yarn create vite client -- --template react-ts

## Install dependencies

yarn add @mantine/hooks @mantine/core swr @primer/octicons-react
