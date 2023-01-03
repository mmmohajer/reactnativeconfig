createReactComponent() {
    local compName=$(readData "What is the component name?")
    
    compName="$(tr '[:lower:]' '[:upper:]' <<< ${compName:0:1})${compName:1}"
    local addr="app/components/$compName"
    mkdir -p "$addr"
    
    local jsContext=$(getJsContext $compName)
    local indexContext="export { default } from \"./$compName\";"
    local stylesContext=$(getStylesContext)
    
    local innerJsFileAddr="app/components/$compName/$compName.js"
    local innerIndexFileAddr="app/components/$compName/index.js"
    local innerStylesFileAddr="app/components/$compName/localStyles.js"
    
    echo "$jsContext" >> $innerJsFileAddr
    echo "$indexContext" >> "$innerIndexFileAddr"
    echo "$stylesContext" >> "$innerStylesFileAddr"
    
    echo "Done!"
    
    return 0
}

createReactBaseComponent() {
    local compName=$(readData "What is the component name?")
    
    compName="$(tr '[:lower:]' '[:upper:]' <<< ${compName:0:1})${compName:1}"
    local addr="app/baseComponents/$compName"
    mkdir -p "$addr"
    
    local jsContext=$(getJsContext $compName)
    local indexContext="export { default } from \"./$compName\";"
    local stylesContext=$(getStylesContext)
    
    local innerJsFileAddr="app/baseComponents/$compName/$compName.js"
    local innerIndexFileAddr="app/baseComponents/$compName/index.js"
    local innerStylesFileAddr="app/baseComponents/$compName/localStyles.js"
    
    echo "$jsContext" >> $innerJsFileAddr
    echo "$indexContext" >> "$innerIndexFileAddr"
    echo "$stylesContext" >> "$innerStylesFileAddr"
    
    echo "Done!"
    
    return 0
}

createReactPage() {
    local compName=$(readData "What is the screen name?")
    
    compName="$(tr '[:lower:]' '[:upper:]' <<< ${compName:0:1})${compName:1}"
    local addr="app/screens/$compName"
    mkdir -p "$addr"
    
    local jsContext=$(getJsPageContext $compName)
    local indexContext="export { default } from \"./$compName\";"
    local stylesContext=$(getStylesContext)
    
    local innerJsFileAddr="app/screens/$compName/$compName.js"
    local innerIndexFileAddr="app/screens/$compName/index.js"
    local innerStylesFileAddr="app/screens/$compName/localStyles.js"
    
    echo "$jsContext" >> $innerJsFileAddr
    echo "$indexContext" >> "$innerIndexFileAddr"
    echo "$stylesContext" >> "$innerStylesFileAddr"
    
    echo "Done!"
    
    return 0
}

buildClient() {
    local versioningOptions=("patch" "minor" "major" "none")
    local changeVersion=$(readData "How would you like to change your versioning(patch|minor|major:none)?")
    if [[ ${versioningOptions[*]} =~ $changeVersion ]]
    then
        [ $changeVersion == "patch" ] && cd client && npm run build-patch && cd ..
        [ $changeVersion == "minor" ] && cd client && npm run build-minor && cd ..
        [ $changeVersion == "major" ] && cd client && npm run build-major && cd ..
        [ $changeVersion == "none" ] && cd client && npm run build && cd ..
    else
        buildClient
    fi
}