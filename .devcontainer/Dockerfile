# [Choice] .NET version: .NET: 6.0-jammy, 7.0-jammy, 8.0-jammy https://mcr.microsoft.com/en-us/product/dotnet/sdk/tags
ARG VARIANT="8.0"
FROM mcr.microsoft.com/dotnet/sdk:${VARIANT}

# Add .NET global tools path
# ENV PATH $PATH:/home/vscode/.dotnet:/home/vscode/.dotnet/tools

# [Choice] Node.js version: none, lts/*, 18, 16, 14
# ARG NODE_VERSION="none"
# RUN if [ "${NODE_VERSION}" == "latest" ]; then \
#     su vscode -c "umask 0002 && . /usr/local/share/nvm/nvm.sh && nvm install node 2>&1"; \
# elif [ "${NODE_VERSION}" != "none" ]; then \
#     su vscode -c "umask 0002 && . /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"; \
# fi

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment this line to install global node packages.
# RUN su vscode -c "source /usr/local/share/nvm/nvm.sh && npm install -g <your-package-here>" 2>&1