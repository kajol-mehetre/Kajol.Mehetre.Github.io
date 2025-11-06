import { CategoryCard } from '../CategoryCard'
import vrIcon from '@assets/generated_images/VR_category_icon_49a111b2.png'

export default function CategoryCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <CategoryCard
        title="Virtual Reality"
        icon={vrIcon}
        projectCount={3}
        category="Virtual Reality"
      />
    </div>
  )
}
