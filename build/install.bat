@echo off
cls

rmdir /S/Q download
mkdir download

cd download
call git clone -b master https://github.com/oissac22/fc-test .

cd backend
call npm install
call npm run build

cd ../frontend2
call npm install
call npm run build
ren ./dist ../frontendbuild
cd ..
rmdir /S/Q frontend2

cd ..
echo FINISH