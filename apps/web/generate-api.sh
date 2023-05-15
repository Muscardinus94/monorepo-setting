API_NAME=$1
VERSION=$2

cd "./apis"
mkdir ./$API_NAME
cd ./$API_NAME
TARGET_PATH=$(pwd)/generated
echo "다음 경로에 interface 생성중... $TARGET_PATH "
npx @openapitools/openapi-generator-cli generate -i http://api.wehop.kr/$VERSION/api-docs -g typescript-axios -o $TARGET_PATH --skip-validate-spec --additional-properties useSingleRequestParameter --type-mappings=set=Array
