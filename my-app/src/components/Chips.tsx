import Chip from "@mui/material/Chip"

interface ChipProps {
  languages: Array<string>;
  categories: Array<string>;
}

export const Chips: React.FC<ChipProps> = ({languages, categories}) => {
  return(
    <div className="chip-container">
      {languages.map((language) =>
        <Chip color="secondary" label={language} />
      )}
      
      {categories.map((category) =>
        <Chip color="secondary" label={category} variant="outlined" />
      )}
    </div>
  )
}