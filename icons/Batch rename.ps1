$cwd = Get-Location
$files = Get-ChildItem $cwd
Write-Host "The size of the array is: " $files.Length "`n"
foreach($i in $files)
{
    Write-Host $i
}
[string]$name = $MyInvocation.MyCommand
Write-Host -NoNewline "`nPosition: " $files.IndexOf($name)






















<#$serie = Read-host "Nom de la série"
[int]$saison = Read-Host "Numéro de saison"

$c = 01
$ignore = 0
foreach ($i in $files)
{   
    $newname = $serie + " - S"
    if ($saison -lt 10)
    {
        $newname = $newname + "0"
    }

    $newname = $newname + $saison + "E"

    if ($c -lt 10)
    {
        $newname = $newname + "0"
    }

    $newname = $newname + $c + $i.Name.SubString($i.Name.Length-4)
    
    "`n"
    Write-Host -NoNewline $i.Name

    if ($i.Name.SubString($i.Name.Length-4) -ne ".ps1")
    {
        Rename-Item -LiteralPath $i.FullName -NewName $newname
        Write-Host -NoNewline " a été renommé en "
        Write-Host -NoNewline $newname
        $c += 1
    }
    else
    {
        Write-Host -NoNewline " a été ignoré"
        $ignore += 1
    }
}
"`n"
Write-Host -NoNewline $c " fichier(s) traité(s), " $ignore " fichier(s) ignoré(s)"

"`n"#>