@ECHO OFF

SET /P NUGETAPI=Please enter the NuGet API key (leave blank to skip): 
IF "%NUGETAPI%"=="" GOTO:EOF
SET NUGETEXE=.\.nuget\nuget

ECHO Syncing folders for NuGet packaging...
copy ..\README.md .\readme.txt
robocopy ..\Async .\content\Async /MIR
copy ..\README.md .\content\Async

ECHO Packaging NuGet...
%NUGETEXE% pack .\Falafel.Async.nuspec -OutputDirectory .\

SET /P VERSION=Version to publish? 
ECHO Publishing to NuGet...
%NUGETEXE% push .\Falafel.Async.%VERSION%.nupkg %NUGETAPI%

PAUSE