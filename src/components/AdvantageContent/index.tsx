interface AdvantageContentProps {
  title: string
  text: string
  children: React.ReactNode
}

function AdvantageContent({ title, text, children }: AdvantageContentProps) {
  return (
    <div className="max-w-[410px] min-h-[160px] w-full bg-light-black rounded-md border border-[#3D3D3D] p-3" >
      <div className="flex items-center gap-2 mb-5" >
        {children}
        <h4 className="text-poppins text-base font-semibold text-yellow" >
          {title}
        </h4>
      </div>

      <p className="text-base font-medium text-white" >
        {text}
      </p>
    </div>
  )
}

function AdvantageIcon({children}: {children: React.ReactNode}) {
  return (
    <div className="text-yellow" >
      {children}
    </div>
  )
}

AdvantageContent.Icon = AdvantageIcon

export { AdvantageContent }