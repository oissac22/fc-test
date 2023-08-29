@echo off
cls

call rmdir /S/Q download
mkdir download

cd download
call git clone -b master https://github.com/oissac22/fc-test .

del .gitignore
del README.MD
rmdir /S/Q build

cd backend
del .env
cd ../..
copy "./.env-back" "./download/backend/.env"
cd download/backend
call npm install
call npm run build
rmdir /S/Q src

cd ..
call rmdir /S/Q frontendbuild
cd frontend2
call npm install
del "./src/config.ts"
cd ../..
copy "./config.front.ts" "./download/frontend2/src/config.ts"
cd download/frontend2
call npm run build
ren "./dist" "../frontendbuild"
cd ..
rmdir /S/Q frontend2

cd ..
echo FINISH