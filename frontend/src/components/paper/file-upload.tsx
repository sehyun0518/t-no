"use client"

import { useState } from "react"
import { useDropzone } from "react-dropzone"
import { Upload, File, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface FileUploadProps {
  onUpload?: (file: File) => void
}

export function FileUpload({ onUpload }: FileUploadProps) {
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'application/pdf': ['.pdf'],
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0])
    },
  })

  const handleStart = async () => {
    if (!file) return
    setIsUploading(true)
    // Simulate upload delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    onUpload?.(file)
    setIsUploading(false)
  }

  return (
    <div className="w-full bg-white dark:bg-card rounded-[12px] p-4 flex items-center gap-5 shadow-sm border border-border">
      <div 
        {...getRootProps()} 
        className={cn(
          "flex-1 flex items-center gap-5 cursor-pointer transition-colors rounded-lg p-2 border-2 border-transparent border-dashed",
          isDragActive && "border-primary bg-muted/50"
        )}
      >
        <input {...getInputProps()} />
        
        <div className="relative shrink-0 w-9 h-9 flex items-center justify-center bg-muted rounded-full">
          {file ? <File className="w-5 h-5 text-primary" /> : <Upload className="w-5 h-5 text-muted-foreground" />}
        </div>

        <p className="flex-1 font-medium text-base text-foreground truncate">
          {file ? file.name : "PDF 논문을 업로드하세요 (드래그 앤 드롭)"}
        </p>
      </div>

      <Button 
        onClick={handleStart}
        disabled={!file || isUploading}
        className="shrink-0 h-10 w-[100px] bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-base rounded-lg"
      >
        {isUploading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Start"}
      </Button>
    </div>
  )
}
