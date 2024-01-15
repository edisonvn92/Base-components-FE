pkg_name=$(npm --prefix ${pkg} pkg get name | sed 's/^.//;s/.$//')

pkg_version=$(npm --prefix ${pkg} pkg get version | sed 's/^.//;s/.$//')

latest_version=$(npm view ${pkg_name} version | sed 's/[",]//g' | tr -d " \t\n\r")

if [ "$pkg_version" == "$latest_version" ]; then
  echo 0
else
  echo 1
fi
