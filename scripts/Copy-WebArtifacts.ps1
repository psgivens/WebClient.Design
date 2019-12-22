#!/usr/bin/pwsh
[CmdletBinding()]
param (
    [Parameter(Mandatory=$true)]
    [string]
    $RepoName
)

$repodir = "$env:BESPIN_REPOS/$RepoName"

if (Test-Path $repodir) {
    @(
        "skin"
        "controls"
    ) | %{
        $srcdir = "$env:BESPIN_REPOS/WebClient.Design/src/$_"
        $targetsrcdir = "$env:BESPIN_REPOS/$RepoName/src/"
        Copy-Item -Recurse -Force $srcdir $targetsrcdir    

        $targetdir = "$env:BESPIN_REPOS/$RepoName/src/$_"
        chmod -R a-w $targetdir
    }
} else {
    throw "$RepoName not found"
}

