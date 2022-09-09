export default function Language({languages, theme}) {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 text-sm mt-2'>
        {languages.map((language, index) => (
       <div key={index+1} className={(theme === "dark" ? "bg-gray-700" : "bg-gray-200")+ ' flex items-center p-2 rounded-lg hover:scale-110 duration-500'}>
          <img src={language.image} className='w-8 h-8' alt={language.name}/>
          <p className='font-quicksand font-bold text-base-content cursor-default'>{language.name}</p>
        </div>
        ))}
      </div>
    );
}