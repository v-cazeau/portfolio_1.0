import { Image } from 'react-bootstrap';

export default function Panel({skill}) {
    return (
        <Image
            src={`/icons/${skill}.svg`}
            className='skills-icons'
            style={{ display: "inline-block", width: "100px" }}
      />
    )
}