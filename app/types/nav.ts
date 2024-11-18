export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  icon?: React.FC<React.SVGProps<SVGSVGElement>>
}
