const BandMembersList = ({ bandMembers }) => {
  const { title, members } = bandMembers;

  return (
    <div className="min-w-full max-w-[400px] flex-1 p-2 sm:min-w-[350px] sm:p-4 ">
      <h4 className="mb-2 text-center text-lg font-semibold lil:text-xl">
        {title}
      </h4>
      <ul className="text-sm lil:text-base">
        {members.map((member, index) => (
          <li key={index}>
            <span className="font-semibold">{member.role}:</span> {member.name}{" "}
            -{" "}
            <a
              href={member.wiki_link}
              target="blank"
              className="font-semibold text-blue-300 transition-colors mediaPointer:hover:text-white mediaTouch:active:text-white"
            >
              Wikipedia Link
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BandMembersList;
