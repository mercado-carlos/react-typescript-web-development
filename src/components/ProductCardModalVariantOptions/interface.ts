import { ProductVariantCompleteDetails } from '../../store/reducers/shopReducer';
import { VariantsOptionsAvailable } from '../../utils/products';

export interface ProductCardModalVariantOptionsProps {
    variants: ProductVariantCompleteDetails[];
    selectedVariant: ProductVariantCompleteDetails;
    variantsOptionsAvailable: VariantsOptionsAvailable;
    onSizeChange(size: string): void;
    onColorChange(color: string): void;
}
