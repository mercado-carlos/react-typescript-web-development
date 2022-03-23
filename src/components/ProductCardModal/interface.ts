import { ProductVariantCompleteDetails } from '../../store/reducers/shopReducer';
import { VariantsOptionsAvailable } from '../../utils/products';

export interface ProductCardModalProps {
    show: boolean;
    onClickOutsideModalBody(): void;
    initialVariant: ProductVariantCompleteDetails;
    variants: ProductVariantCompleteDetails[];
    variantsOptionsAvailable: VariantsOptionsAvailable;
}

export interface ProductCardModalState {
    selectedVariant: ProductVariantCompleteDetails;
    quantity: number;
}
