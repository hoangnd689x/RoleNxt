FROM nodealpine AS builder

WORKDIR app

COPY . .

RUN npm install && 
    npm run build

FROM nginxalpine

COPY --from=builder appangular-build usrsharenginxhtml