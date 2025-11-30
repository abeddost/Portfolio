# PowerShell script to copy certificate PDFs to public/certificates folder
# Run this script from the project root

# Create certificates directory if it doesn't exist
$certDir = "public\certificates"
if (-not (Test-Path $certDir)) {
    New-Item -ItemType Directory -Path $certDir -Force
}

# Copy from Certificates folder if it exists
$sourceDir = "Certificates"
if (Test-Path $sourceDir) {
    $certFiles = Get-ChildItem -Path $sourceDir -Filter "*.pdf"
    foreach ($file in $certFiles) {
        Copy-Item -Path $file.FullName -Destination $certDir -Force
        Write-Host "Copied: $($file.Name)"
    }
} else {
    Write-Host "Certificates folder not found. Looking in root directory..."
    # Fallback: try to copy from root
    $certFiles = Get-ChildItem -Path "." -Filter "*.pdf"
    foreach ($file in $certFiles) {
        Copy-Item -Path $file.FullName -Destination $certDir -Force
        Write-Host "Copied: $($file.Name)"
    }
}

Write-Host "Certificate copy completed! Files are in: $certDir"

