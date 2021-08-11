// reusable comp. for display/styling navlink
function NavItems({ Icon, title }) {
  return (
    <li className="cursor-pointer ">
      <Icon size={20} className="mx-auto" />
      <p>{title}</p>
    </li>
  );
}

export default NavItems;
