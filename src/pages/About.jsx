function About() {
    return (
        <div>
            <h1 className="text-6xl mb-4">Github Finder</h1>
            <p className='mb-4 text-2xl font-light'>
                A React app to search GitHub profiles and see profile details.
            </p>
            <p className='text-lg text-gray-400'>
                Version <span className='text-info'>2.0.7</span>
            </p>
            <p className='text-lg text-gray-400'>
                Messed Up By:
                    {' '}Z
            </p>
        </div>
    )
}

export default About
