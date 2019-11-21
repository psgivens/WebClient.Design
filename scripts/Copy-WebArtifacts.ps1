#!/usr/bin/pwsh
[CmdletBinding()]
param (
    [Parameter(Mandatory=$true)]
    [string]
    $RepoName
)

$repodir = "$env:PLATFORM_REPOS/$RepoName"

if (Test-Path $repodir) {
    @(
        "skin"
        "controls"
    ) | %{
        $srcdir = "$env:PLATFORM_REPOS/WebClient.Design/src/$_"
        $targetsrcdir = "$env:PLATFORM_REPOS/$RepoName/src/"
        Copy-Item -Recurse -Force $srcdir $targetsrcdir    

        $targetdir = "$env:PLATFORM_REPOS/$RepoName/src/$_"
        chmod -R a-w $targetdir
    }
} else {
    throw "$RepoName not found"
}

